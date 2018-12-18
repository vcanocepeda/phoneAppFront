import { Component, OnInit, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Phone App';

  authenticated: Observable<boolean>;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (isDevMode()) {
      console.log('👋 Development!');
    } else {
      console.log('💪 Production!');
    }
   this.authenticated = this.authService.isLoggedIn$(); // TODO We have to see if we could call directly to the service
  }

  logout() {
    console.log(' The user has logged out ');
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
