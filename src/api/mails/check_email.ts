import {DB} from "../constants";
import firestore from "../firestore";

export async function isEmailRegistered(email: string) {
    const registeredMails = await firestore.collection(DB.PARTICIPANTS_COLLECTION).where(DB.EMAIL, "==", email).get();
    return registeredMails.size > 0;
}