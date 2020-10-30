export default abstract class Mail {
    name: string;
    email: string;
    baseUrl: string;
    link?: string;

    constructor(name: string, email: string, baseUrl: string, link?: string) {
        this.name = name;
        this.email = email;
        this.link = baseUrl + link;
        this.baseUrl = baseUrl
    }

    abstract subject: string;

    abstract textContent: string;

    abstract htmlContent: string;
}