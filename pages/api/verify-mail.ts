import admin from "firebase-admin";
import {NextApiRequest, NextApiResponse} from "next";
import {UserData} from "../../src/components/registration/types";
import {DB} from "../../src/api/constants";
import firestore from "../../src/api/firestore";
import sendTelegramMessage from "../../src/api/sendTelegramMessage";
import {restrictRoute} from "../../src/api/restrictRoute";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (await restrictRoute(req, res, "POST"))
        return

    function sendResponse(status: number, message: string) {
        res.status(status).send(message)
    }

    const {token} = req.query
    console.log("email_verification", {token});
    try {
        const document = await firestore.collection(DB.PARTICIPANTS_COLLECTION).doc(token as string);
        const data = (await document.get()).data();

        if (!data)
            return sendResponse(400, "Invalid Link")
        if (data[DB.EMAIL_VERIFIED])
            return sendResponse(400, "Email is already verified")

        const created = data ? data[DB.CREATED].toDate() : null;
        const ONE_HOUR = 60 * 60 * 1000; /* ms */
        const now = new Date();
        if (created && ((now.getTime()) - created.getTime()) > ONE_HOUR) {
            console.log("verification_expired", {created});
            return sendResponse(400, "Verification code is expired")
        }

        await document.update({[DB.EMAIL_VERIFIED]: admin.firestore.Timestamp.now()});
        await sendTelegramMessage(data as UserData)
        console.log("verification_successful");
        sendResponse(200, "Verification completed")
    } catch (e) {
        console.log("verification_code_invalid", {token});
        return sendResponse(400, "Unexpected Error")
    }
}