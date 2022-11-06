import { SENDGRID_API_KEY, VERCEL_URL } from '$env/static/private';
import { MailService } from '@sendgrid/mail';

const mailService = new MailService();
mailService.setApiKey(SENDGRID_API_KEY);
const EMAIL_CONFIRMATION_TEMPLATE = 'd-8013bf5d37d6480987871720846c61b1';
const REGISTRATION_CONFIRMATION_TEMPLATE = 'd-cae111ac7d9c40419d2ebb433a9d6a56';
const emailFrom = { email: 'info@blaesertag2023.de', name: 'Bläsertag 2023' };
export async function sendEmailConfirmation(email: string, confirmation_id: string) {
	await mailService.send({
		to: email,
		from: emailFrom,
		templateId: EMAIL_CONFIRMATION_TEMPLATE,
		dynamicTemplateData: {
			confirmation_link: `${VERCEL_URL}/registration/confirm/${confirmation_id}`
		}
	});
}

export async function sendRegistrationConfirmation(email: string) {
	await mailService.send({
		to: email,
		from: emailFrom,
		templateId: REGISTRATION_CONFIRMATION_TEMPLATE
	});
}
