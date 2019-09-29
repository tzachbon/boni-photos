import { createTransport } from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/smtp-transport';
import Mail from 'nodemailer/lib/mailer';



export class Mailer {
  private mail: Mail;
  private mailOptions: MailOptions;
  private readonly auth = {
    user: 'BoniPhotosInc@gmail.com',
    pass: 'boni123456'
  }
  private subject: string;
  private text: string;


  constructor(subject?: string, text?: string, to?: string) {
    if (subject) {
      this.setNewSubject(subject);
    }
    if (text) {
      this.setNewText(text);
    }
    this.mail = this.initMailMetaData();
    this.mailOptions = this.initMailOptions(to);
  }

  get mailInfo() {
    return {
      subject: this.subject,
      text: this.text
    };
  }

  private initMailMetaData() {
    return createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: this.auth
    });
  }

  private initMailOptions(toWho?: string) {
    const to = toWho || this.auth.user;
    const subject = this.subject || this.setNewSubject();
    const text = this.text || this.setNewText();
    return {
      from: this.auth.user,
      to,
      subject,
      text
    };
  }

  setNewSubject(subject = 'nodemailer test') {
    this.subject = subject;
    return this.subject;
  }

  setNewText(text = 'node text') {
    this.text = text;
    return this.text;
  }

  async send() {
    return new Promise((res, rej) => {
      this.mail.sendMail(this.mailOptions, (err, info) => {
        if (err) {
          rej(err);
        }
        if (info) {
          res(info);
        }
      });
    });
  }
}
