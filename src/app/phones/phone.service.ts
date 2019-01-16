import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPhone } from './phone.model';
import { IPhoneRequest } from './phone.model';
import { IPhoneList } from './phonelist.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*' })
};


@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private http: HttpClient) { }

  getPhones$(): Observable<IPhoneList> {
    const url = environment.phonesListUrl;
    return this.http.get<IPhoneList>(url, httpOptions);
  }

  getPhone$(id: String) {
    const url = environment.phonesListUrl + '/' + id;
   // return this.http.get(url, httpOptions);
    const req = new HttpRequest('GET', url, {
      reportProgress: true
    });

    return this.http.request(req);
  }

  addPhone$(phone: IPhone): Observable<IPhone> {
    console.log('We add a phone ' + phone.description);
    const url = environment.phonesListUrl;
    const iphoneRequest = <IPhoneRequest>{ phone: phone };
    return this.http.post<IPhone>(url, iphoneRequest, httpOptions);
  }
}
