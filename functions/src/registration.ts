import {Request} from "firebase-functions/lib/providers/https";
import {Response} from "express";
import RegistrationCompleteMail from "./mails/registrationComplete";
import sendMail from "./helper/sendMail";
import {validateRecaptcha} from "./helper/validateRecaptcha";
import * as admin from "firebase-admin";
import {DB} from "./utils/constants";

export default (admin: admin.app.App) => async (req: Request, res: Response) => {
  const recaptchaToken = req.body.recaptchaToken;
  const name = req.body.name;
  const email = req.body.email;
  try {
    await validateRecaptcha(recaptchaToken); // throws if something is wrong
    // TODO check if email already exists
    const data = {
      [DB.CREATED]: new Date().toISOString(),
      [DB.NAME]: name,
      [DB.EMAIL]: email,
    };
    const doc = await admin.firestore().collection(DB.PARTICIPANTS_COLLECTION).add(data);
    console.log(`Stored document ${doc.id} with data: ${data}`);

    const mail = new RegistrationCompleteMail(name, email, `${req.protocol}://${req.hostname}/verifyMail?token=${doc.id}`);
    await sendMail(mail);
    res.status(200);
    res.send()
  } catch (e) {
    console.error(e.name, e.message);
    res.status(400);
    res.send(`Something went wrong. ${e.name}: ${e.message}`)
  }

}