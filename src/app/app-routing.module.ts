import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PhonesComponent } from './phones/phones.component';
import { AddPhoneComponent } from './phones/add-phone/add-phone.component';
import { PhoneResolver } from './phones/phone.resolver';
import { AuthGuard } from './login/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'phones', component: PhonesComponent, resolve: { message: PhoneResolver}, canActivate: [AuthGuard] },
  { path: 'addphone', component: AddPhoneComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule { }
