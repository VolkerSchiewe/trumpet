import Mail from "./mails/mail";

export const sendMail = async (mail: Mail): Promise<void> => {
    console.log("sending_email", {name: mail.name, email: mail.email, subject: mail.subject});
    const res = await fetch("https://api.mailjet.com/v3.1/send", {
        method: "POST",
        body: JSON.stringify({
            Messages: [
                {
                    From: {
                        Email: "info@blaesertag2021.de",
                        Name: "Brüderischer Bläsertag 2021 Berlin"
                    },
                    To: [
                        {
                            Email: mail.email,
                            Name: mail.name
                        }
                    ],
                    Subject: mail.subject,
                    TextPart: mail.textContent,
                    HTMLPart: mail.htmlContent,
                }
            ]
        }),
        headers: {
            "Content-Type": "application/json",
            'Authorization': 'Basic ' + Buffer.from(process.env.MAILJET_API_KEY + ":" + process.env.MAILJET_SECRET).toString('base64')
        }
    });
    if (res.ok) {
        const data = await res.json()
        console.log("email_send", {response: data});
    } else {
        console.log("email_send_error", {response: res})
        throw Error(`Email could not been send, response: ${res}`)
    }
};