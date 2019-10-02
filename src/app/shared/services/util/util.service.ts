import { Injectable } from '@angular/core';

type ISplitBy = ' ' | '-';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  titlecaseString(str: string, splitBy: ISplitBy  =  '-') {
    let strArray = str.split(splitBy);
    strArray = strArray.map(word => word.charAt(0).toUpperCase());
    return str;
  }
}
