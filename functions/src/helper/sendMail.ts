import * as functions from "firebase-functions"
import Axios from "axios";
import Mail from "../mails/mail";

export const sendMail = async (mail: Mail) => {
  console.log(`Sending E-Mail to ${mail.name} <${mail.email}>`);
  const res = await Axios.post("https://api.mailjet.com/v3.1/send",
    {
      "Messages": [
        {
          "From": {
            "Email": "info@blaesertag2021.de",
            "Name": "Brüderischer Bläsertag 2021 Berlin"
          },
          "To": [
            {
              "Email": mail.email,
              "Name": mail.name
            }
          ],
          "Subject": mail.subject,
          "TextPart": mail.textContent,
          "HTMLPart": mail.htmlContent,
        }
      ]
    },
    {
      auth: {
        username: functions.config().mailjet.apikey,
        password: functions.config().mailjet.secret
      },
      headers: {
        "Content-Type": "application/json",
      }
    });
  if (res.status == 200) {
    console.log(`Email sent! ${JSON.stringify(res.data)}`);
    return
  } else
    throw Error(`Email could not been send, response: ${res.data}`)
}