const mg = require('mailgun-js');

const apiKey = process.env.MAILGUN_KEY || "no-key";
const domain = process.env.MAILGUN_DOMAIN || "no-domain";
const from = `YoReferee Support <support@${domain}>`;

class MailService {

   mailgun() {
     return mg({
         apiKey: apiKey,
         domain: domain
      })
   }

   sendActivationMail(to, link) {
    this.mailgun().messages().send({
       from,
       to,
       subject: 'Активация аккаунта на' + process.env.API_URL,
       html:
               `
               <div>
               <h1>Для активации перейдите по ссылке</h1>
               <a href="${link}">${link}</a>
               </div>
               `
    },
      (err, body) => {
       if (err) {
          console.log(err)
       } else {
          console.log(body)
       }
      })
   }
}

module.exports = new MailService();