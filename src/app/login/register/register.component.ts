import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = <User>{};
  }

  register() {
    console.log('Registered with Username: ' + this.user.username + ' Password: ' + this.user.password);
    this.userService.addUser$(this.user.username, this.user.password).subscribe(
      httpResponse => {
        console.log('Registering user. Show headers ' + httpResponse.headers.get('Authorization'));
      },
      err => {
        console.log(err);
      }
    );
  }
}
