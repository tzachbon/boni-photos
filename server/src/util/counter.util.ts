import cron from 'node-cron';
import { environment } from '../environment';
import { Mailer } from './mail.util';
import request = require('request-promise');
import moment = require('moment')
export class Counter {


  constructor() {
    this.initCron();
  }

  initCron() {
    cron.schedule('25 5 10 * * *', this.sendMailEveryDay.bind(this));
    cron.schedule('0 0 12 * * FRI', this.sendMailEveryWeek.bind(this));
  }

  async sendMailEveryWeek() {
    const userData = await this.getUsersData();
    const userDetails = {
      numberOfUsers: Object.keys(userData).filter((user, i, arr) => arr.indexOf(user) === i).length,
      entersPerUser: this.getEntersPerUser(userData),
      avgPerUser: this.getAvgTime(userData)
    };

    const text = JSON.stringify(userDetails);
    const mail = new Mailer('פירוט שבועי', text);
    await mail.send();
  }

  async sendMailEveryDay() {
    const userData = await this.getUsersData();
    const userDetails = {
      numberOfUsers: Object.keys(userData).filter((user, i, arr) => arr.indexOf(user) === i).length,
      entersPerUser: this.getEntersPerUser(userData),
      avgPerUser: this.getAvgTime(userData)
    };

    const text = JSON.stringify(userDetails);
    const mail = new Mailer('פירוט יומי', text);
    await mail.send();

  }

  getEntersPerUser(data: any) {
    const newObject = {};
    Object.entries(data).forEach(([key, value]) => {
      if (!!value && typeof value === 'object') {
        Object.assign(newObject, { [key]: Object.keys(value).length });
      }
    });

    return newObject;
  }

  getAvgTime(data) {
    const newObject = {};
    Object.entries(data).forEach(([key, value]) => {
      if (!!value && typeof value === 'object') {

        let total = 0;
        const valuesArray = Object.values(value);

        valuesArray.map(({ date }) => new Date(date)).forEach(date => {
          if (!!date && moment(date).isValid()) {
            total += +moment(date).hour();
          }
        });
        Object.assign(newObject, { [key]: (total / valuesArray.length) });
      }
    });

    return newObject;
  }



  async getUsersData() {
    return request(`${environment.BASE_URL}/users.json`).then(data => JSON.parse(data));
  }

}
