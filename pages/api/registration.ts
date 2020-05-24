import {NextApiRequest, NextApiResponse} from 'next'
import {DB} from "../../utils/api/constants";
import firestore from "../../utils/api/firestore";
import RegistrationCompleteMail from "../../utils/api/mails/registrationComplete";
import {sendMail} from "../../utils/api/sendMail";
import {validateRecaptcha} from "../../utils/api/validateRecaptcha";
import admin from "firebase-admin"
import {disableIfRestricted} from "../../utils/restrictAccess";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (await disableIfRestricted(res))
        return

    if (req.method === 'POST') {
        const {recaptchaToken, ...data} = req.body;
        console.log("registration", {data: data});
        try {
            await validateRecaptcha(recaptchaToken); // throws if something is wrong
            const registeredMails = await firestore.collection(DB.PARTICIPANTS_COLLECTION).where(DB.EMAIL, "==", data.email).get();
            if (registeredMails.size > 0)
                throw new Error("Email is already registered!");

            // adding created date
            data[DB.CREATED] = admin.firestore.Timestamp.now();
            const doc = await firestore.collection(DB.PARTICIPANTS_COLLECTION).add(data);
            console.log("document_stored", {id: doc.id, data: data});

            const mail = new RegistrationCompleteMail(data.firstName, data.email, `${req.headers.origin}/verify-mail?token=${doc.id}`);
            await sendMail(mail);
            res.status(200).send("");
        } catch (e) {
            console.error(e.name, e.message);
            res.status(400).send(`Something went wrong. ${e.name}: ${e.message}`)
        }
    } else {
        res.status(405).setHeader("Allow", ["POST"])
        res.send("")
    }
}