import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  constructor() { }

  login(username: string, password: string): void {
    const user = this.users.filter((element: User) => element.username === username && element.password === password);
    if (user.length !== 0) {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
    }
  }

  isLoggedIn(): Observable<boolean> {
    const user = sessionStorage.getItem('currentUser');
    return of(user !== null);
  }

  logout(): void {
    sessionStorage.removeItem('token');
  }
}
