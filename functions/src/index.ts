import * as functions from 'firebase-functions';
import { generateText } from './util/generate-text.util';
import { Mailer } from './util/mail.util';
import { IMessage } from './models/message.interface';
import { responseHelper } from './util/response.util';
import { setHeaders } from './util/headers.util';


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// export const scheduledEmailDaily = functions.pubsub.schedule('eveny 1 minutes').onRun(async (context) => {

//   const subject = `העידכון היומי על הכניסות מהאתר`;
//   // const text = generateText(userData, 'DAILY');
//   const mailToAdmin = new Mailer(subject, `test cron`);
//   await mailToAdmin.send();

//   return null;
// })

export const sendEmail = functions.https.onRequest(async (req, res) => {
  try {
    setHeaders(req, res)
    const userData = req.body as IMessage;
    if (userData) {
      const subject = `🤩יוזר חדש שלח עכשיו מייל דרך האתר!`;
      const text = generateText<IMessage>(userData, 'NEW MESSAGE');
      const mailToAdmin = new Mailer(subject, text);
      const mailDetails = await mailToAdmin.send();

      res.status(201).json(responseHelper({
        message: 'Message Sent',
        mailDetails
      })
      );
    } else {
      throw new Error('User data is not set')
    }

  } catch (error) {
    res.status(500).json(
      responseHelper({
        error
      }, false)
    );
  }
})
