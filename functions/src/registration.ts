import {Request} from "firebase-functions/lib/providers/https";
import {Response} from "express";
import RegistrationCompleteMail from "./mails/registrationComplete";
import sendMail from "./helper/sendMail";
import {validateRecaptcha} from "./helper/validateRecaptcha";

export default async (req: Request, res: Response) => {
  const recaptchaToken = req.body.recaptchaToken;
  const name = req.body.name;
  const email = req.body.email;
  try {
    await validateRecaptcha(recaptchaToken); // throws if something is wrong
    const mail = new RegistrationCompleteMail(name, email, "https://example.com");
    await sendMail(mail);
    res.status(200);
    res.send()
  } catch (e) {
    res.status(400);
    res.send(`Something went wrong. ${e.name}: ${e.message}`)
  }

}