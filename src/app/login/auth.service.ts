import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
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

  constructor() {}

  login(username: string, password: string): boolean {
    const user = this.users.filter((element: User) => element.username === username && element.password === password);
    if (user.length !== 0) {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      this.authenticated.next(true);
      return true;
    } else {
      return false;
    }
  }

  isLoggedIn$(): Observable<boolean> {
    //  if (sessionStorage.getItem('currentUser') != null) { this.authenticated.next(true); }
    return this.authenticated.asObservable();
  }

  logout(): void {
    sessionStorage.removeItem('currentUser');
    this.authenticated.next(false);
  }
}
