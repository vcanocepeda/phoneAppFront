import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PhonesComponent } from './phones/phones.component';
import { AddPhoneComponent } from './phones/add-phone/add-phone.component';
import { PhoneResolver } from 'src/app/phones/phone.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'phones', component: PhonesComponent, resolve: { message: PhoneResolver} },
  { path: 'addphone', component: AddPhoneComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    PhoneResolver
  ]
})
export class AppRoutingModule { }
