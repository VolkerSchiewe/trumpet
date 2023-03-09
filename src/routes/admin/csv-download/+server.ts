import { getAllRegistrations } from '$lib/server/firebase';
import { jsonToCsv } from '$lib/utils/csv';
import type { RequestHandler } from './$types';
const headerTranslations: Record<string, string> = {
	name: 'Name',
	email: 'E-Mail',
	address: 'Adresse',
	zip_city: 'PLZ & Ort',
	type: 'Art',
	choir: 'Chor',
	voice: 'Stimme',
	departure: 'Abreise',
	state: 'Status',
	notes: 'Bemerkungen'
};
export const GET: RequestHandler = async ({ url }) => {
	const data = await getAllRegistrations();
	const headerString = url.searchParams.get('header');
	const header = headerString ? headerString.split(',') : [];

	return new Response(
		jsonToCsv(data, header, (value) => headerTranslations[value]),
		{
			headers: {
				'Content-Type': 'text/csv',
				'Content-Disposition': 'attachment; filename="Anmeldungen.csv"'
			}
		}
	);
};
