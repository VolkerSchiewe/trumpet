import { getAllRegistrations } from '$lib/server/firebase';
import type { PageServerLoad } from './$types';

type Choir = { sopran: number; alt: number; tenor: number; bass: number; total: number };
export type ChoirDistribution = Record<string, Choir>;
export const load: PageServerLoad = async (): Promise<ChoirDistribution> => {
	const data = await getAllRegistrations();

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
	return distribution;
};
