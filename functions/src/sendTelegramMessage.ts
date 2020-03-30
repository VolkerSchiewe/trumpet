import * as telegraf from "telegraf"
import * as functions from "firebase-functions"

export default function (data: any): Promise<any> {
  const bot = new telegraf.Telegram(functions.config().telegram.api_token);
  return bot.sendMessage(
    functions.config().telegram.chat_id,
    `Neue Anmeldung🎉 ${data.firstName} <${data.email}> `
  );
}