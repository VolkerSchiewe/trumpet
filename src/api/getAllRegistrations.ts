import {DB} from "./constants";
import firestore from "./firestore";

export async function getAllRegistrations() {
    const registrations: any = []
    const snapshot = await firestore.collection(DB.PARTICIPANTS_COLLECTION).get()
    snapshot.forEach(d => {
        const user = d.data()
        if (user.created){
            user.created = new Intl.DateTimeFormat('de').format(new Date(user.created.toMillis()))
        }
        if (user.emailVerified){
            user.emailVerified = new Intl.DateTimeFormat('de').format(new Date(user.emailVerified.toMillis()))
        }
        registrations.push(user)
    })
    return registrations
}