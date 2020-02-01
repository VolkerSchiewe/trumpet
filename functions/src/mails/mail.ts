export default abstract class Mail {
  name: string;
  email: string;
  link?: string;

  constructor(name: string, email: string, link?: string) {
    this.name = name;
    this.email = email;
    this.link = link;
  }

  abstract subject: string;

  abstract textContent: string;

  abstract htmlContent: string;
}