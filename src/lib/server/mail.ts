import { SENDGRID_API_KEY, HOST_URL } from '$env/static/private';
import { MailService } from '@sendgrid/mail';

const mailService = new MailService();
mailService.setApiKey(SENDGRID_API_KEY);

const EMAIL_CONFIRMATION_TEMPLATE = 'd-8013bf5d37d6480987871720846c61b1';
const REGISTRATION_CONFIRMATION_TEMPLATE = 'd-cae111ac7d9c40419d2ebb433a9d6a56';
const VERIFICATION_REMINDER_TEMPLATE = 'd-6cdb19d39bfd4e7d8d0d1c0401498f69';
const QUESTION_TEMPLATE = 'd-3cdc5d5584d146f387ae7d3488a24c60';

const emailFrom = { email: 'info@blaesertag2023.de', name: 'Bläsertag 2023' };

export async function sendEmailConfirmation(email: string, confirmation_id: string) {
	await mailService.send({
		to: email,
		from: emailFrom,
		templateId: EMAIL_CONFIRMATION_TEMPLATE,
		dynamicTemplateData: {
			confirmation_link: `${HOST_URL}/registration/confirm/${confirmation_id}`
		}
	});
}
export async function sendVerificationReminder(email: string, confirmation_id: string) {
	await mailService.send({
		to: email,
		from: emailFrom,
		templateId: VERIFICATION_REMINDER_TEMPLATE,
		dynamicTemplateData: {
			confirmation_link: `${HOST_URL}/registration/confirm/${confirmation_id}`
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

export async function sendQuestionMail(email: string) {
	await mailService.send({
		to: email,
		from: emailFrom,
		templateId: QUESTION_TEMPLATE
	});
}
