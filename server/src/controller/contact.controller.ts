import { RequestHandler } from 'express';
import { responseHelper } from '../util/response.util';
import { Mailer } from '../util/mail.util';
import { IMessage } from '../../../functions/src/models/message.interface';
import { generateText } from '../util/generate-text.util';

export const ContactController: RequestHandler = async (req, res, next) => {
  try {
    const userData = req.body as IMessage;
    const subject = `יוזר חדש שלח עכשיו מייל דרך האתר!`;
    const text = generateText(userData);
    const mailToAdmin = new Mailer(subject, text);
    console.log('====================================');
    console.log(mailToAdmin.mailInfo);
    console.log('====================================');
    const mailDetails = await mailToAdmin.send();

    res.status(201).json(responseHelper({
      message: 'Message Sent',
      mailDetails
    })
    );

  } catch (error) {
    res.status(500).json(
      responseHelper({
        error
      }, false)
    );
  }
}
