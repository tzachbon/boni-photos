import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IHttpResponse } from '../../models/http-response.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  sendContactMessage<T>(messageBody) {
    return this.http.post<IHttpResponse<T>>(`${environment.CLOUD_URL}/sendEmail`, messageBody);
  }

  updateUser() {
    const currentDate = Date.now();
    return this.getIpAddress()
      .pipe(
        map(({ ip }) => ip),
        switchMap((ip: string) => {
          const key = ip.split('.').join('-');
          return this.http
            .post(`${environment.BASE_URL}/users/${key}.json`, { ip, date: new Date().toString() })
        }

        )
      );
  }

  getIpAddress() {
    return this.http.get<{ ip: string }>('https://jsonip.com')
  }
}
