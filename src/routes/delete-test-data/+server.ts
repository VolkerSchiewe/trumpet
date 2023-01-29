import { deleteTestData } from '$lib/server/firebase';
import type { RequestHandler } from './$types';

export const DELETE: RequestHandler = async () => {
	await deleteTestData();
	return new Response();
};
