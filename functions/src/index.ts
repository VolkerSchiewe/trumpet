import * as functions from "firebase-functions"
import registration from "./registration";
import verifyEmail from "./verifyEmail";
import {DB} from "./utils/constants";
import sendTelegramMessage from "./sendTelegramMessage";

const admin = require('firebase-admin');
const serviceAccount = require("../keys/devKeys.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://trumpet-dev-7521f.firebaseio.com"
});
const europeFunctions = functions.region("europe-west1");
export const checkRegistration = functions.https.onRequest(registration(admin));
export const emailVerificationHandler = functions.https.onRequest(verifyEmail(admin));
export const newRegistrationHandler = europeFunctions.firestore.document(`${DB.PARTICIPANTS_COLLECTION}/{doc_id}`)
  .onCreate(snap => sendTelegramMessage(snap.data()));