import * as functions from "firebase-functions";
import Axios from "axios";

export const validateRecaptcha = async (token: string) => {
  const {data} = await Axios.post(
    `https://recaptcha.google.com/recaptcha/api/siteverify?secret=${functions.config().recaptcha.secret}&response=${token}`,
    {},
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
      },
    });
  console.log("recaptcha result", data);
  return data.success
};
