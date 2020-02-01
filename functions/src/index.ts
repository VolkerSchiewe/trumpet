import * as functions from 'firebase-functions';
import Axios from "axios";


export const checkRecaptcha = functions.https.onRequest(async (req, res) => {
  const token = req.query.token;
  const {data} = await Axios.post(
    `https://recaptcha.google.com/recaptcha/api/siteverify?secret=${functions.config().recaptcha.secret}&response=${token}`,
    {},
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
      },
    },);
  console.log("recaptcha result", data);
  if (data.success) {
    res.status(200);
    res.send("You're good to go, human.")
  } else {
    res.status(400);
    res.send("Recaptcha verification failed. Are you a robot?")
  }
});
