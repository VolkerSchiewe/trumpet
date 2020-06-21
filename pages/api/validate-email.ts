import {NextApiRequest, NextApiResponse} from "next";
import {isEmailRegistered} from "../../src/api/mails/check_email";
import {disableIfRestricted} from "../../src/utils/restrictAccess";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (await disableIfRestricted(res))
        return

    if (req.method === 'GET') {
        const {email} = req.query as { email: string }
        console.log("validate_email", {email});

        if (await isEmailRegistered(email)) {
            res.status(200).send("")
        } else {
            res.status(404).send("")
        }
    } else {
        res.status(405).setHeader("Allow", ["GET"])
        res.send("")
    }
}