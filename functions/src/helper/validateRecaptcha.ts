import * as functions from "firebase-functions";
import Axios from "axios";

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
  else throw new Error("Gotcha robot!")
};
