import { Component, OnInit } from '@angular/core';
import { IPhone } from './phone.model';
import { PhoneService } from './phone.service';
import { IPhoneList } from './phonelist.model';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {
  phones: IPhone[];
  selectedPhone: IPhone;
  idphone: IPhone;

  constructor(private phoneService: PhoneService) {

  }

  ngOnInit() {
    this.getPhones();
  }

  onSelect(phone: IPhone): void {
    this.selectedPhone = phone;
  }

  onKey(event: any) {
    this.phoneService.getPhone$('1').subscribe(phone => this.idphone = phone);
  }

  getPhones(): void {
    this.phoneService.getPhones$().subscribe(data => {
      this.phones = data.phoneList;
    },
    err => {
      console.log(err);
    });
  }
}
