import {Request} from "firebase-functions/lib/providers/https";
import {Response} from "express";
import * as admin from "firebase-admin";
import {DB} from "./utils/constants";

export default (admin: admin.app.App) => async (req: Request, res: Response) => {
  console.log(req.query.token);
  const document = await admin.firestore().collection(DB.PARTICIPANTS_COLLECTION).doc(req.query.token);

  const data = (await document.get()).data();
  const created = data ? new Date(data[DB.CREATED]) : null;
  const ONE_HOUR = 60 * 60 * 1000; /* ms */
  const now = new Date();
  if (created && ((now.getTime()) - created.getTime()) > ONE_HOUR){
    console.log("More than an hour ago");
    res.status(400);
    res.send("Verification code is expired!");
    return
  }
  console.log("Verification completed");
  await document.update({[DB.EMAIL_VERIFIED]: now.toISOString()});
  res.status(200);
  res.send("Verification completed")
}