import {Response} from "express";
import * as admin from "firebase-admin";
import {Request} from "firebase-functions/lib/providers/https";
import {sendMail} from "./helper/sendMail";
import {validateRecaptcha} from "./helper/validateRecaptcha";
import RegistrationCompleteMail from "./mails/registrationComplete";
import {DB} from "./utils/constants";
import Timestamp = admin.firestore.Timestamp;

export default (adminObj: typeof admin) => async (req: Request, res: Response): Promise<void> => {
  const {recaptchaToken, ...data} = req.body;
  console.log(`Registering: ${data.firstName} ${data.lastName}, ${data.email}`);
  try {
    await validateRecaptcha(recaptchaToken); // throws if something is wrong
    const registeredMails = await adminObj.firestore().collection(DB.PARTICIPANTS_COLLECTION).where(DB.EMAIL, "==", data.email).get();
    if (registeredMails.size > 0)
      throw new Error("Email is already registered!");

    // adding created date
    data[DB.CREATED] = Timestamp.now();
    const doc = await adminObj.firestore().collection(DB.PARTICIPANTS_COLLECTION).add(data);
    console.log(`Stored document ${doc.id} with data: ${JSON.stringify(data)}`);

    const mail = new RegistrationCompleteMail(data.firstName, data.email, `${req.protocol}://${req.hostname}/verifyMail?token=${doc.id}`);
    await sendMail(mail);
    res.status(200).send();
  } catch (e) {
    console.error(e.name, e.message);
    res.status(400).send(`Something went wrong. ${e.name}: ${e.message}`)
  }
}