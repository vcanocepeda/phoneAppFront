import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { IPhone } from './phone.model';
import { IPhoneList } from './phonelist.model';
import { PHONES } from './mock-phones';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*' })
};


@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  // TODO Get this URL from the config.json
  private phonesUrl = 'http://localhost:8080/phone';  // URL to web api

  constructor(private http: HttpClient) { }

  getPhones$(): Observable<IPhoneList> {
    return this.http.get<IPhoneList>(this.phonesUrl, httpOptions);
  }
}
