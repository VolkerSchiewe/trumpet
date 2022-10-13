import type { Actions } from '@sveltejs/kit';
function generateFailiureData(
	data: Record<string, string>
): Record<string, { value: string; message?: string }> {
	return Object.keys(data).reduce((acc, key) => {
		acc[key] = { value: data[key] };
		return acc;
	}, {} as Record<string, { value: string; message?: string }>);
}
type User = {
	name: string;
	email: string;
	address: string;
	zip_city: string;
};
export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const userData = Object.fromEntries(formData.entries()) as User;
		// TODO store data in DB and send our email
		console.log(userData);
	}
};
