import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user: User;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = <User>{};
  }

  login() {
    console.log('Login with Username: ' + this.user.username + ' Password: ' + this.user.password);
    this.authService.loginApp(this.user.username, this.user.password).subscribe(
      httpResponse => {
        console.log('Executing step 2 ' + httpResponse.headers.get('Authorization'));
        if  (httpResponse.status === 200) {
          this.router.navigate(['phones']);
        }  else {
          console.log('El usuario no ha sido autorizado ');
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
