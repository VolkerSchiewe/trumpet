import { distributeOrchestraData } from '$lib/components/orchestra/distribute-orchestra-data';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ setHeaders }) => {
	setHeaders({
		'cache-control': 'public, max-age=86400' // 1 Day
	});
	return {
		orchestraDistribution: distributeOrchestraData(50)
	};
};
