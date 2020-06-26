import {NextApiRequest, NextApiResponse} from "next";

export async function restrictRoute(req: NextApiRequest, res: NextApiResponse, allowedMethods: string | string[]) {
    allowedMethods = Array.isArray(allowedMethods) ? allowedMethods : [allowedMethods]
    if (!allowedMethods.includes(req.method ?? "")) {
        res.status(405).setHeader("Allow", allowedMethods)
        res.send("")
        return true
    }
    return false
}