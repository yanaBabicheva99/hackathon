const mg = require("mailgun-js");
const nodemailer = require("nodemailer");

const apiKey = process.env.MAILGUN_KEY || "no-key";
const domain = process.env.MAILGUN_DOMAIN || "no-domain";
const from = `YoReferee Support <support@${domain}>`;

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  async sendActivationMail(to, link) {
    try {
      await this.transporter.sendMail({
        from: process.env.SMTP_USER,
        to,
        subject: "Активация аккаунта на" + process.env.API_URL,
        text: "",
        html: `
                  <div>
                  <h1>Для активации перейдите по ссылке</h1>
                  <a href="${link}">${link}</a>
                  </div>
                  `,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // mailgun() {
  //   return mg({
  //       apiKey: apiKey,
  //       domain: domain
  //    })
  // }
  //
  // sendActivationMail(to, link) {
  //  this.mailgun().messages().send({
  //     from,
  //     to,
  //     subject: 'Активация аккаунта на' + process.env.API_URL,
  //     html:
  //             `
  //             <div>
  //             <h1>Для активации перейдите по ссылке</h1>
  //             <a href="${link}">${link}</a>
  //             </div>
  //             `
  //  },
  //    (err, body) => {
  //     if (err) {
  //        console.log(err)
  //     } else {
  //        console.log(body)
  //     }
  //    })
  // }
}

module.exports = new MailService();
