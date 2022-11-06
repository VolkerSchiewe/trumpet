import { CAPTACHA_API_KEY } from '$env/static/private';

export async function verifyCaptcha(solution: string) {
	const response = await fetch('https://api.friendlycaptcha.com/api/v1/siteverify', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			solution: solution,
			secret: CAPTACHA_API_KEY,
			sitekey: 'FCMU8T2TH41K5TK7'
		})
	});
	if (response.ok) {
		const data = await response.json();
		if (!data.success) {
			console.error('captcha_invalid', { data });
			throw new Error('Invalid captcha');
		}
	} else {
		console.warn('captcha_error', { status: response.status, response: await response.text() });
	}
}
