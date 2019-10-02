import { Injectable } from '@angular/core';
import { IProduct } from '../../models/product.interface';

type ISplitBy = ' ' | '-';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  adminPhone = '972523635250';
  constructor() { }

  titlecaseString(str: string, splitBy: ISplitBy = '-') {
    let strArray = str.split(splitBy);
    strArray = strArray.map(word => word.charAt(0).toUpperCase());
    return str;
  }

  sendMessageViaWhatsapp(message: string) {
    const whatsappUrl = `https://wa.me/`;
    const encodedMessage = this.encodeMessage(message);
    const url = `${whatsappUrl}${this.adminPhone}?text=${encodedMessage}`;
    const whatsappTab = window.open(url, '_blank');
    whatsappTab.focus();
  }

  encodeMessage(message: string) {
    return message.replace(' ', '%20');
  }

  getProductMessage(product: IProduct) {
    return `היי רציתי לשאול לגבי ${product.title}`;
  }
}
