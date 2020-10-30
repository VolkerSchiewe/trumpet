import {NextApiRequest, NextApiResponse} from 'next'
import {DB} from "../../src/api/constants";
import firestore from "../../src/api/firestore";
import {restrictRoute} from "../../src/api/restrictRoute";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (await restrictRoute(req, res, 'GET'))
        return

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
}