import { distributeOrchestraData } from '$lib/components/orchestra/distribute-orchestra-data';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ setHeaders }) => {
	const registrationCount = 178; //await getRegistrationCount();
	setHeaders({
		'cache-control': 'public, max-age=86400' // 1 Day
	});
	return {
		registrationCount: registrationCount,
		orchestraDistribution: distributeOrchestraData(230)
	};
};
