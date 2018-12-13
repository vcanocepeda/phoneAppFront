import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPhone } from '../phone.model';
import { PhoneService } from '../phone.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent implements OnInit {

  phone: IPhone;
  submitted: boolean;

  constructor(private phoneService: PhoneService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.phone = <IPhone>{};
    this.submitted = false;
  }

  onSubmit(f: NgForm) {
  }

  newPhone() {
    console.log('The name is ' + this.phone.name);  // { first: '', last: '' }
    console.log('The description is ' + this.phone.description);
    console.log('The image is '  + this.phone.image);
    console.log('The price is '  + this.phone.price);
    this.phoneService.addPhone$(this.phone).subscribe(phone => {
      console.log('We are trying to add the phone ' + phone.name);
    } );
  }
}
