import { createUser, findUser } from '$lib/components/server/firebase';
import { userSchema, type User } from '$lib/userSchema';
import { invalid, type Actions } from '@sveltejs/kit';

export type FormError = Record<string, { value: FormDataEntryValue; message?: string }>;
function generateFailureData(data: Record<string, FormDataEntryValue>): FormError {
	return Object.keys(data).reduce((acc, key) => {
		acc[key] = { value: data[key] };
		return acc;
	}, {} as FormError);
}

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData.entries());

		const result = userSchema.safeParse(data);
		if (!result.success) {
			console.error('Schema Error', result.error);
			return invalid(400, {
				success: false,
				data: generateFailureData(data),
				message: 'Etwas stimmt nicht. Bitte überprüfe deine Eingaben.'
			});
		}

		const userData: User = result.data;
		const user = await findUser(userData.email);
		if (user) {
			return invalid(400, {
				success: false,
				data: {
					...generateFailureData(userData),
					email: {
						value: userData.email,
						message: 'Es gibt schon eine Anmeldung mit dieser Email Addresse'
					}
				}
			});
		}

		try {
			await createUser(userData);
			return { success: true };

			// TODO send out email

			// TODO update state
		} catch (e) {
			console.error('Error adding document: ', e);
		}
	}
};
