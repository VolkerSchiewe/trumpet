import {get} from "../request";

export const validateRecaptcha = async (token: string): Promise<boolean> => {
    const res = await get(
        `https://recaptcha.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${token}`,
        {},
        {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
        }
    )
    console.log("recaptcha_result", res.data);
    if (res.data.success) return true;
    throw new Error("Gotcha robot!")
};