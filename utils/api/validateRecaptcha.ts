import {get} from "../request";

export const validateRecaptcha = async (token: string): Promise<boolean> => {
    console.log("validate_recaptcha", {token: token})
    const res = await get(
        `https://recaptcha.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${token}`,
        undefined,
        {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
        }
    )
    console.log("recaptcha_result", res.data);
    if (res.data.success) return true;
    throw new Error("Gotcha robot!")
};