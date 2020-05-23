import {NextApiRequest, NextApiResponse} from 'next'
import {DB} from "../../utils/api/constants";
import firestore from "../../utils/api/firestore";

interface NameData {
    firstName: string
    lastName: string
}
export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const {token} = req.query
        if (!token) {
            console.log("missing_token")
            res.status(400).send("")
        } else {
            const userData = await firestore.collection(DB.PARTICIPANTS_COLLECTION).doc(token as string).get();
            const {firstName, lastName} = userData.data() as NameData

            res.status(200).json({firstName, lastName})
        }
    } else {
        res.status(405).setHeader("Allow", ["GET"])
        res.send("")
    }
}