import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ErrorDialogService } from '../material/error-dialog/error-dialog.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService, private router: Router, public errorDialogService: ErrorDialogService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authService.isLoggedIn()) {
            request = request.clone({
                setHeaders: {
                 Authorization: this.authService.getAuthenticationToken()
                }
            });
        }
      return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff with response if you want
          console.log('Interceptamos la respuesta ' + event.status);
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['login']);
          } else if (err.status === 403) {
            this.errorDialogService.openDialog( { error: 'error2', description: 'description2'} );
            this.router.navigate(['login']);
            // Se pueden meter los dos en un mismo interceptor??
          }
        }
      }));
    }
}
