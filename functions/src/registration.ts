import {Request} from "firebase-functions/lib/providers/https";
import {Response} from "express";
import RegistrationCompleteMail from "./mails/registrationComplete";
import sendMail from "./sendMail";
import {validateRecaptcha} from "./recaptchaHandler";

export default async (req: Request, res: Response) => {
  const recaptchaToken = req.body.recaptchaToken;
  const name = req.body.name;
  const email = req.body.email;
  if (await validateRecaptcha(recaptchaToken)) {
    const mail = new RegistrationCompleteMail(name, email, "https://example.com");
    await sendMail(mail);
    res.status(200);
    res.send()
  } else {
    res.status(400);
    res.send("Something went wrong")
  }
}