import {NextApiRequest, NextApiResponse} from 'next'
import {DB} from "../../src/api/constants";
import firestore from "../../src/api/firestore";
import {isEmailRegistered} from "../../src/api/mails/check_email";
import RegistrationCompleteMail from "../../src/api/mails/registrationComplete";
import {sendMail} from "../../src/api/sendMail";
import {validateRecaptcha} from "../../src/api/validateRecaptcha";
import admin from "firebase-admin"
import isTestUser from "../../src/utils/isTestUser";
import {restrictRoute} from "../../src/api/restrictRoute";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (await restrictRoute(req, res, 'POST'))
        return

    const {recaptchaToken, ...data} = req.body;
    console.log("registration", {data: data});
    try {
        if (!isTestUser(data.email)) {
            // Disable recaptcha check for test email
            await validateRecaptcha(recaptchaToken); // throws if something is wrong
        }
        if (await isEmailRegistered(data.email)) {
            throw new Error("Email is already registered!");
        }
        // adding created date
        data[DB.CREATED] = admin.firestore.Timestamp.now();
        const doc = await firestore.collection(DB.PARTICIPANTS_COLLECTION).add(data);
        console.log("document_stored", {id: doc.id, data: data});

        const mail = new RegistrationCompleteMail(data.firstName, data.email, req.headers.origin as string, `/verify-mail?token=${doc.id}`);
        await sendMail(mail);
        res.status(200).send(isTestUser(data.email) ? doc.id : "");
    } catch (e) {
        console.error(e.name, e.message);
        res.status(400).send(`Something went wrong. ${e.name}: ${e.message}`)
    }
}