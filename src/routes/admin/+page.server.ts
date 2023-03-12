import { getAllRegistrations, getNotVerifiedRegistrations } from '$lib/server/firebase';
import { sendVerificationReminder } from '$lib/server/mail';
import type { Actions, PageServerLoad } from './$types';
const priceTranslation: Record<string, string> = {
	full: 'Voll',
	half: 'Halb',
	reduced: 'Ermäßigt',
	'reduced?': 'Ermäßigt',
	'full?': 'Voll',
	none: 'Frei',
	'': 'Unbekannt'
};
type Choir = { sopran: number; alt: number; tenor: number; bass: number; total: number };
export type ChoirDistribution = Record<string, Choir>;
export type PriceDistribution = Record<string, number>;
export const load: PageServerLoad = async (): Promise<{
	distribution: ChoirDistribution;
	prices: PriceDistribution;
}> => {
	const data = await getAllRegistrations();
	const prices = data.reduce((acc, registration) => {
		const price = priceTranslation[registration.price || ''];
		acc[price] = acc[price] ? acc[price] + 1 : 1;
		return acc;
	}, {} as PriceDistribution);

	const distribution = data.reduce((acc, registration) => {
		const choirName = registration.choir || 'Kein Chor';
		if (registration.type === 'gast') return acc;
		const choir: Choir = acc[choirName] ?? {
			sopran: 0,
			alt: 0,
			tenor: 0,
			bass: 0,
			total: 0
		};
		choir[registration.voice as keyof Choir]++;

		choir.total++;
		acc[choirName] = choir;
		return acc;
	}, {} as ChoirDistribution);
	return { distribution, prices };
};

export const actions: Actions = {
	reminder: async () => {
		const data = await getNotVerifiedRegistrations();
		data.forEach((registration) => {
			sendVerificationReminder(registration.email, registration.confirmation_id);
		});
	}
};
