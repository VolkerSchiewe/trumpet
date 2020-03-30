import * as admin from "firebase-admin"
import * as functions from "firebase-functions"
import registration from "./registration";
import sendTelegramMessage from "./sendTelegramMessage";
import {DB} from "./utils/constants";
import verifyEmail from "./verifyEmail";

admin.initializeApp({
  credential: admin.credential.cert(require("../keys/devKeys.json")),
  databaseURL: "https://trumpet-dev-7521f.firebaseio.com"
});
const europeFunctions = functions.region("europe-west1");
export const checkRegistration = functions.https.onRequest(registration(admin));
export const emailVerificationHandler = functions.https.onRequest(verifyEmail(admin));
export const newRegistrationHandler = europeFunctions.firestore.document(`${DB.PARTICIPANTS_COLLECTION}/{doc_id}`)
  .onCreate(snap => sendTelegramMessage(snap.data()));