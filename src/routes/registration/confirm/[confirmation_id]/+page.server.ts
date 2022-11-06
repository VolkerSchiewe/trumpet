import { findUserByConfirmationId, setUserState, State } from '$lib/server/firebase';
import { sendRegistrationConfirmation } from '$lib/server/mail';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }): Promise<{ email: string }> => {
	console.info('email_confirmation', { confirmation_id: params.confirmation_id });
	const user = await findUserByConfirmationId(params.confirmation_id);
	if (!user) throw error(404, 'Ungültiger Link');

	if (user.state === State.EMAIL_VERIFICATION_SENT) {
		await sendRegistrationConfirmation(user.email);
		await setUserState(user.email, State.EMAIL_VERIFIED);
	} else {
		console.warn('user_already_verified', { confirmation_id: params.confirmation_id });
	}

	return { email: user.email };
};
