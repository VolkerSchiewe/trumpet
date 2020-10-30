import {NextApiRequest, NextApiResponse} from "next";
import {isEmailRegistered} from "../../src/api/mails/check_email";
import {restrictRoute} from "../../src/api/restrictRoute";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (await restrictRoute(req, res, 'GET'))
        return

    const {email} = req.query as { email: string }
    console.log("validate_email", {email});

    if (await isEmailRegistered(email)) {
        res.status(200).send("")
    } else {
        res.status(404).send("")
    }
}