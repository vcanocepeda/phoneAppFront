import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = <User>{};
  }

  login() {
    console.log('Username: ' + this.user.username + ' Password: ' + this.user.password);
    this.authService.login(this.user.username, this.user.password);
  }

}
