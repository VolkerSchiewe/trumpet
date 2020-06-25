import * as telegraf from "telegraf"
import {Message} from "telegram-typings";
import {UserData} from "../components/registration/types";
import isTestUser from "../utils/isTestUser";

export default function (data: UserData): Promise<Message> | undefined {
    if (!process.env.TELEGRAM_API_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
        console.log("telegram_config_missing", {
            charId: process.env.TELEGRAM_CHAT_ID,
            apiToken: process.env.TELEGRAM_API_TOKEN
        })
        return
    }
    //disable for tests
    if (isTestUser(data.email)) return
    const bot = new telegraf.Telegram(process.env.TELEGRAM_API_TOKEN);
    return bot.sendMessage(
        process.env.TELEGRAM_CHAT_ID,
        `Neue Anmeldung🎉 ${data.firstName} <${data.email}> `
    );
}