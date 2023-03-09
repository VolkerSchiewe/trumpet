import type { Handle } from '@sveltejs/kit';
import { ADMIN_LOGIN } from '$env/static/private';

export const handle: Handle = async ({ event, resolve }) => {
	const url = new URL(event.request.url);

	if (url.pathname.startsWith('/admin')) {
		const auth = event.request.headers.get('Authorization');

		if (auth !== `Basic ${Buffer.from(ADMIN_LOGIN).toString('base64')}`) {
			return new Response('Not authorized', {
				status: 401,
				headers: {
					'WWW-Authenticate': 'Basic realm="User Visible Realm", charset="UTF-8"'
				}
			});
		}
	}

	return resolve(event);
};
