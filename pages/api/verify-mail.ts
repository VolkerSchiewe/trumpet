import admin from "firebase-admin";
import {NextApiRequest, NextApiResponse} from "next";
import {UserData} from "../../src/components/registration/types";
import {DB} from "../../src/api/constants";
import firestore from "../../src/api/firestore";
import sendTelegramMessage from "../../src/api/sendTelegramMessage";
import {disableIfRestricted} from "../../src/utils/restrictAccess";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (await disableIfRestricted(res))
        return

    if (req.method === 'POST') {
        const {token} = req.query
        console.log("email_verification", {token});
        try {
            const document = await firestore.collection(DB.PARTICIPANTS_COLLECTION).doc(token as string);
            const data = (await document.get()).data();
            if (!data)
                throw Error("No document found")
            const created = data ? data[DB.CREATED].toDate() : null;
            const ONE_HOUR = 60 * 60 * 1000; /* ms */
            const now = new Date();
            if (created && ((now.getTime()) - created.getTime()) > ONE_HOUR) {
                console.log("verification_expired", {created});
                res.status(400);
                res.send("Verification code is expired!");
                return
            }
            console.log("verification_successful");
            await document.update({[DB.EMAIL_VERIFIED]: admin.firestore.Timestamp.now()});
            await sendTelegramMessage(data as UserData)
            res.status(200).send("Verification completed")
        } catch (e) {
            console.log("verification_code_invalid", {token});
            res.status(400).send("Wrong Link!")
        }
    } else {
        res.status(405).setHeader("Allow", ["POST"])
        res.send("")
    }
}