import {NextApiRequest, NextApiResponse} from "next";
import {allowedUsers} from "../../pages/api/auth/[...nextauth]";
// @ts-ignore
import {setOptions, getSession} from "next-auth/client";
import {getSite} from "../utils/getSite";


export async function restrictRoute(req: NextApiRequest, res: NextApiResponse, allowedMethods: string | string[], validateUsers?: boolean) {
    allowedMethods = Array.isArray(allowedMethods) ? allowedMethods : [allowedMethods]
    if (!allowedMethods.includes(req.method ?? "")) {
        res.status(405).setHeader("Allow", allowedMethods)
        res.send("")
        return true
    }

    if (validateUsers) {
        setOptions({site: getSite()})
        const session = await getSession({req})
        console.log("Current session:", session)
        if (!allowedUsers.includes(session?.user?.email ?? "")){
            res.status(403).send("Not Allowed")
            return true
        }
    }
    return false
}