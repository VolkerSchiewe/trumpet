import { dev } from '$app/environment';
import { verifyCaptcha } from '$lib/server/captcha';
import { createUser, findUserByEmail, setUserState, State } from '$lib/server/firebase';
import { sendEmailConfirmation } from '$lib/server/mail';
import { userSchema, type User } from '$lib/userSchema';
import { fail, type Actions, type ServerLoad, redirect } from '@sveltejs/kit';

export type FormError = Record<string, { value: FormDataEntryValue; message?: string }>;
function generateFailureData(data: Record<string, FormDataEntryValue>): FormError {
	return Object.keys(data).reduce((acc, key) => {
		acc[key] = { value: data[key] };
		return acc;
	}, {} as FormError);
}
export type ActionFormData = { success: boolean; data?: FormError; message?: string };

export const load: ServerLoad = () => {
	redirect(301, '/information');
};
export const actions: Actions = {
	default: async ({ request }) => {
		console.info('registration');

		const formData = await request.formData();
		const data = Object.fromEntries(formData.entries());

		const result = userSchema.safeParse(data);
		if (!result.success) {
			console.error('registration_schema_error', result.error);
			return fail(400, {
				success: false,
				data: generateFailureData(data),
				message: 'Etwas stimmt nicht. Bitte überprüfe deine Eingaben.'
			});
		}

		const userData: User = result.data;
		try {
			if (!dev) await verifyCaptcha(userData['frc-captcha-solution'] as string);
		} catch (e) {
			return fail(400, {
				success: false,
				message: 'Etwas stimmt nicht. Bitte versuch es erneut oder melde dich bei uns.'
			});
		}
		const user = await findUserByEmail(userData.email);
		if (user) {
			return fail(400, {
				success: false,
				data: {
					...generateFailureData(userData),
					email: {
						value: userData.email,
						message: 'Es gibt schon eine Anmeldung mit dieser E-Mail Addresse'
					}
				}
			});
		}

		try {
			const user = await createUser(userData);
			await sendEmailConfirmation(user.email, user.confirmation_id);

			await setUserState(userData.email, State.EMAIL_VERIFICATION_SENT);
			return { success: true };
		} catch (e) {
			console.error('registration_unexpected_error: ', e);
			return { success: false };
		}
	}
};
