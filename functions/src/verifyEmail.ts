import {Request} from "firebase-functions/lib/providers/https";
import {Response} from "express";
import * as admin from "firebase-admin";
import {DB} from "./utils/constants";
import Timestamp = admin.firestore.Timestamp;

export default (admin: admin.app.App) => async (req: Request, res: Response) => {
  console.log(req.query.token);
  try {
    const document = await admin.firestore().collection(DB.PARTICIPANTS_COLLECTION).doc(req.query.token);
    const data = (await document.get()).data();
    const created = data ? data[DB.CREATED].toDate() : null;
    const ONE_HOUR = 60 * 60 * 1000; /* ms */
    const now = new Date();
    if (created && ((now.getTime()) - created.getTime()) > ONE_HOUR) {
      console.log("More than an hour ago");
      res.status(400);
      res.send("Verification code is expired!");
      return
    }
    console.log("Verification completed");
    await document.update({[DB.EMAIL_VERIFIED]: Timestamp.now()});
    res.status(200).send("Verification completed")
  } catch (e) {
    console.log("Document not found");
    res.status(400).send("Wrong Link!")
  }
}