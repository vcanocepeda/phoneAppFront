import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: Array<User> = [
    {id: 1, username: 'user1', password: 'password1'},
    {id: 2, username: 'user2', password: 'password2'},
    {id: 3, username: 'user3', password: 'password3'},
    {id: 4, username: 'user4', password: 'password4'},
  ];

  private authenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  login(username: string, password: string): boolean {
    const user = this.users.filter((element: User) => element.username === username && element.password === password);
    if (user.length !== 0) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.authenticated.next(true);
      return true;
    } else {
      return false;
    }
  }

  public isLoggedIn$(): Observable<boolean> {
    return this.authenticated.asObservable();
  }

  public isLoggedIn(): boolean {
     return (localStorage.getItem('currentUser') != null);
  }

  public getAuthenticationToken(): string {
    return (localStorage.getItem('authorizationToken'));
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('authorizationToken');
    this.authenticated.next(false);
  }

  public loginApp(username: string, password: string): Observable<any> {
    const url = environment.loginUrl;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' }),
      observe: 'response'
    };

    return this.http.post<any>(url, {username, password}, { observe: 'response' }).pipe(
      map((httpResponse: HttpResponse<any>) => {
        console.log('Executing step 1 ');
        if (httpResponse.status === 200) {
          localStorage.setItem('currentUser', username);
          localStorage.setItem('authorizationToken', httpResponse.headers.get('Authorization'));
          this.authenticated.next(true);
        }
      return httpResponse;
    })
    );
  }
}
