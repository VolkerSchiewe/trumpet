import { TELEGRAM_API_TOKEN, TELEGRAM_CHAT_ID } from '$env/static/private';
import { Telegram } from 'telegraf';

export function sendTelegramMessage(name: string): ReturnType<Telegram['sendMessage']> {
	const bot = new Telegram(TELEGRAM_API_TOKEN);
	return bot.sendMessage(TELEGRAM_CHAT_ID, `Neue Anmeldung🎉 ${name}`);
}
