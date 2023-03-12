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
	notes?: string;
	price?: string;

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

export async function createUser(formData: User): Promise<UserDocument> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { 'frc-captcha-solution': captchaSolution, ...userData } = formData; // Remove captcha solution from userData
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

export async function getRegistrationCount(): Promise<number> {
	const queryResult = await db
		.collection(USER_COLLECTION)
		.where('state', '==', State.EMAIL_VERIFIED)
		.count()
		.get();
	return queryResult.data().count;
}

export async function deleteTestData(): Promise<void> {
	const testEmail = 'blaesertag2023@example.com';
	await db.collection(USER_COLLECTION).doc(testEmail).delete();
}

export async function getAllRegistrations(): Promise<UserDocument[]> {
	const snapshot = await db.collection(USER_COLLECTION).orderBy('name').get();
	const data: UserDocument[] = [];
	snapshot.forEach((doc) => {
		data.push(doc.data() as UserDocument);
	});
	return data;
}

export async function getNotVerifiedRegistrations(): Promise<UserDocument[]> {
	const snapshot = await db
		.collection(USER_COLLECTION)
		.where('state', '==', 'EMAIL_VERIFICATION_SENT')
		.get();
	const data: UserDocument[] = [];
	snapshot.forEach((doc) => {
		data.push(doc.data() as UserDocument);
	});
	return data;
}
