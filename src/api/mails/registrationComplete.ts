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
        `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<img src="${this.baseUrl}/images/logo.svg" alt="logo" style="width: 80px; height: 80px;">
<h3 style="margin-top: 20px;">Anmeldung zum Bläsertag 2021 in Berlin</h3>
<p>
    Hallo <strong>${this.name}</strong>,<br>
    Schön das du dich zum Bläsertag 2021 in Berlin angemeldet hast!<br>
    Um deine Email-Adresse zu bestätigen klicke bitte den foldenden Button.
    Danach ist deine Anmeldung vollständig.
</p>
<button style="background-color: white; border: 1px solid #0078d2; border-radius: 4px; padding: 6px;">
    <a style="text-decoration: none; color: black; font-weight: bold;" href='${this.link}'>E-Mail Adresse bestätigen</a>
</button>
<p>
    Viele Grüße,<br>
    Das Vorbereitungsteam des Bläsertag Berlin
</p>

`

}