import {NextApiRequest, NextApiResponse} from 'next'
import {DB} from "../../utils/api/constants";
import firestore from "../../utils/api/firestore";
import {disableIfRestricted} from "../../utils/restrictAccess";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (await disableIfRestricted(res))
        return
    if (req.method === 'GET') {
        const snapshot = await firestore.collection(DB.PARTICIPANTS_COLLECTION).get()
        let deleted = 0
        snapshot.forEach(d => {
            const user = d.data()
            if (user?.email?.includes("@example.com")) {
                d.ref.delete();
                deleted++
            }
        })
        res.json(`Deleted ${deleted} items`)

    } else {
        res.status(405).setHeader("Allow", ["GET"])
        res.send("")
    }
}