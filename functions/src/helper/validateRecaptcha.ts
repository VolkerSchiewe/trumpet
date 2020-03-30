import Axios from "axios";
import * as functions from "firebase-functions";

export const validateRecaptcha = async (token: string): Promise<boolean> => {
  const {data} = await Axios.post(
    `https://recaptcha.google.com/recaptcha/api/siteverify?secret=${functions.config().recaptcha.secret}&response=${token}`,
    {},
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
      },
    });
  console.log("recaptcha result", data);
  if (data.success) return true;
  throw new Error("Gotcha robot!")
};
