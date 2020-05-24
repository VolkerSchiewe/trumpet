import {ServerResponse} from "http";
import {NextApiResponse} from "next";
import {useRouter} from "next/router";

export async function redirectIfRestricted(res?: ServerResponse) {
    console.log("restrict_access", process.env.RESTRICT_FEATURES)
    if (process.env.RESTRICT_FEATURES) {
        if (res) {
            res.writeHead(302, {
                Location: '/'
            });
            res.end();
        } else {
            const router = useRouter()
            await router.replace("/")
        }
    }
}

export async function disableIfRestricted(res: NextApiResponse) {
    if (process.env.RESTRICT_FEATURES) {
        res.status(404).send("")
        return true
    }
    return false
}