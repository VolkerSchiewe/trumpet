import * as functions from "firebase-functions"
import registration from "./registration";
import verifyEmail from "./verifyEmail";

const admin = require('firebase-admin');
const serviceAccount = require("../keys/devKeys.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://trumpet-dev-7521f.firebaseio.com"
});

export const checkRegistration = functions.https.onRequest(registration(admin));
export const emailVerificationHandler = functions.https.onRequest(verifyEmail(admin));