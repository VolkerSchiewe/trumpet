import * as functions from "firebase-functions"
import registration from "./registration";

export const checkRegistration = functions.https.onRequest(registration);