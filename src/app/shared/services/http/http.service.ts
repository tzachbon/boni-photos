import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHttpResponse } from '../../models/http-response.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  sendContactMessage<T>(messageBody) {
    return this.http.post<IHttpResponse<T>>(`/contact-us`, messageBody);
  }
}
