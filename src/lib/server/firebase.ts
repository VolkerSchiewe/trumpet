import type { ServiceAccount } from 'firebase-admin';
import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
import { FIREBASE_PRIVATE_KEY } from '$env/static/private';
import type { User } from '$lib/userSchema';
import { v4 as uuidv4 } from 'uuid';

const serviceAccount: ServiceAccount = {
	projectId: 'trumpet-b59c1',
	privateKey: FIREBASE_PRIVATE_KEY,
	clientEmail: 'firebase-adminsdk-itft7@trumpet-b59c1.iam.gserviceaccount.com'
};

if (admin.apps.length === 0)
	admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
		databaseURL: 'https://trumpet-b59c1.firebaseio.com'
	});

export const USER_COLLECTION = 'users';
export const db = getFirestore();

export enum State {
	CREATED = 'CREATED',
	EMAIL_VERIFICATION_SENT = 'EMAIL_VERIFICATION_SENT',
	EMAIL_VERIFIED = 'EMAIL_VERIFIED'
}

type UserDocument = {
	name: string;
	email: string;
	address: string;
	zip_city: string;
	type: string;
	choir?: string;
	voice?: string;

	state: State;
	confirmation_id: string;
};

export async function findUserByEmail(email: string): Promise<UserDocument | undefined> {
	const existingDoc = await db.collection(USER_COLLECTION).doc(email).get();
	if (existingDoc.exists) {
		return existingDoc.data() as UserDocument;
	}
	return undefined;
}

export async function findUserByConfirmationId(
	confirmation_id: string
): Promise<UserDocument | undefined> {
	const queryResult = await db
		.collection(USER_COLLECTION)
		.where('confirmation_id', '==', confirmation_id)
		.get();
	if (!queryResult.empty) {
		return queryResult.docs[0].data() as UserDocument;
	}
	return undefined;
}

export async function createUser(userData: User): Promise<UserDocument> {
	const document: UserDocument = { ...userData, state: State.CREATED, confirmation_id: uuidv4() };
	await db.collection(USER_COLLECTION).doc(userData.email).set(document);
	console.info('Document written with ID: ', userData.email);

	return document;
}

export async function setUserState(email: string, state: State): Promise<void> {
	const user = await findUserByEmail(email);
	if (!user) {
		throw new Error('Unable to find the respective user');
	}
	await db.collection(USER_COLLECTION).doc(email).update({ state });
}