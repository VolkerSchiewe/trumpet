import * as telegraf from "telegraf"

export default function (data: any): Promise<any> | undefined {
    if (!process.env.TELEGRAM_API_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
        console.log("telegram_config_missing", {
            charId: process.env.TELEGRAM_CHAT_ID,
            apiToken: process.env.TELEGRAM_API_TOKEN
        })
        return
    }

    const bot = new telegraf.Telegram(process.env.TELEGRAM_API_TOKEN);
    return bot.sendMessage(
        process.env.TELEGRAM_CHAT_ID,
        `Neue Anmeldung🎉 ${data.firstName} <${data.email}> `
    );
}