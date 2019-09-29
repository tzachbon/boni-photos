import cron from 'node-cron';
import { Mailer } from './mail.util';

export class Counter {
  private weekly: number = 0;
  private daily: number = 0;
  private sum: number = 0;


  constructor() {
    cron.schedule('25 5 10 * * *', this.sendMailEveryDay.bind(this));
    cron.schedule('0 0 12 * * FRI', this.sendMailEveryWeek.bind(this))
  }

  async sendMailEveryWeek() {
    const today = new Date().toString();
    const text = `
    נכון לעכשיו:
    ${today}
     נכנסו השבוע ${this.weekly}

     סך הכל נכנסו למערכת:
     ${this.sum}
    `
    const MailToAdmin = new Mailer(`השבוע היו ${this.weekly} כניסות`, text);
    await MailToAdmin.send();
    this.setWeeklyCount(0);
  }

  async sendMailEveryDay() {
    const today = new Date().toString();
    const text = `
    נכון לעכשיו:
    ${today}
    נכנסו היום ${this.daily}
    נכנסו השבוע ${this.weekly}
    נכנסו סך הכל ${this.sum}
    `
    const MailToAdmin = new Mailer(`היום היו ${this.daily} כניסות`, text);
    await MailToAdmin.send();
    this.setDailyCount(0);
  }

  setWeeklyCount(weekly) {
    this.weekly = weekly;
  }

  setDailyCount(daily) {
    this.daily = daily;
  }

  updateCounter() {
    this.daily++;
    this.weekly++;
    this.sum++;
  }

  get totalEnters() {
    return this.sum;
  }

  get weeklyCount() {
    return this.weekly;
  }

  get dailyCount() {
    return this.daily;
  }
}
