import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PhonesComponent } from './phones/phones.component';
import { AppRoutingModule } from './app-routing.module';
import { AddPhoneComponent } from './phones/add-phone/add-phone.component';


@NgModule({
  declarations: [
    AppComponent,
    PhonesComponent,
    AddPhoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
