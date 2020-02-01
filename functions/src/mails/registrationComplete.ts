import Mail from "./mail";

export default class RegistrationCompleteMail extends Mail {
  subject = "Anmeldung zum Bläsertag 2021 in Berlin";
  textContent =
    `Hallo ${this.name},\n\n
    Schön das du dich zum Bläsertag 2021 in Berlin angemeldet hast!\n
    Um deine Email-Adresse zu bestätigen öffne bitte folgenden Link: ${this.link} .\n
    Danach ist deine Anmeldung vollständig.\n\n
    Viele Grüße,\n
    Das Vorbereitungsteam des Bläsertag Berlin`;
  htmlContent =
    `<h3>Anmeldung zum Bläsertag 2021 in Berlin</h3><br>
    Hallo ${this.name},<br><br>
    Schön das du dich zum Bläsertag 2021 in Berlin angemeldet hast!<br>
    Um deine Email-Adresse zu bestätigen klicke bitte <a href='${this.link}'>hier</a>.<br>
    Danach ist deine Anmeldung vollständig.<br><br>
    Viele Grüße,<br>
    Das Vorbereitungsteam des Bläsertag Berlin`
}