export const validateRecaptcha = async (token: string): Promise<boolean> => {
    const data = await fetch(
        `https://recaptcha.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${token}`,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
            },
        },
    ).then(res => res.json());
    console.log("recaptcha_result", data);
    if (data.success) return true;
    throw new Error("Gotcha robot!")
};