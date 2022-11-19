import { distributeOrchestraData } from '$lib/components/orchestra/distribute-orchestra-data';
import { getRegistrationCount } from '$lib/server/firebase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ setHeaders }) => {
	const registrationCount = await getRegistrationCount();
	setHeaders({
		'cache-control': 'public, max-age=86400' // 1 Day
	});
	return {
		registrationCount: registrationCount,
		orchestraDistribution: distributeOrchestraData(registrationCount)
	};
};
