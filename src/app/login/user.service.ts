import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  public addUser$(username: string, password: string): Observable<any> {
    const url = environment.signupUrl;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' }),
      observe: 'response'
    };

    const userRequest = {
      appUser: <User>{
      username: username,
      password: password
      }
    };

    return this.http.post<User>(url, userRequest, { observe: 'response' }).pipe(
      map((httpResponse: HttpResponse<any>) => {
        console.log('Executing step 1 ');
        if (httpResponse.status === 200) {
          this.router.navigate(['login']);
        }
      return httpResponse;
    })
    );
  }
}
