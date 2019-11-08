import { emailTemplate } from '../assets/email';
import { newMessage } from '../assets/components/new-message';
const moment = require('moment');

export const generateText = <T = any>(userData: T, type: 'NEW MESSAGE' | 'DAILY' | 'WEEKLY') => {

  const date = moment(new Date().toString()).format('DD/MM/YYYY');
  const replacers = { ...userData, date };
  let email = emailTemplate;

  switch (type) {
    case 'NEW MESSAGE':
      email = email.replace(`{{ content }}`, newMessage);
      Object.entries(replacers).forEach(([key, value]) => {
        console.log('====================================');
        console.log(key);
        console.log('====================================');
        email = email.split(`{{ ${key} }}`).join(value);
      })
      break;

    case 'DAILY':
      break;
    default:
      break;
  }

  return email

}
