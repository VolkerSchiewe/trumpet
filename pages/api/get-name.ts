import {NextApiRequest, NextApiResponse} from 'next'
import {DB} from "../../utils/api/constants";
import firestore from "../../utils/api/firestore";
import {disableIfRestricted} from "../../utils/restrictAccess";

interface NameData {
    firstName: string
    lastName: string
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (await disableIfRestricted(res))
        return

    if (req.method === 'GET') {
        const {token} = req.query
        if (!token) {
            console.log("missing_token")
            res.status(400).send("")
        } else {
            const userData = await firestore.collection(DB.PARTICIPANTS_COLLECTION).doc(token as string).get();
            const data = userData.data() as NameData
            if (data)
                res.status(200).json({firstName: data.firstName, lastName: data.lastName})
            else
                res.status(404).send("")
        }
    } else {
        res.status(405).setHeader("Allow", ["GET"])
        res.send("")
    }
}