import { Component, OnInit } from '@angular/core';
import { IPhone } from './phone.model';
import { PHONES } from './mock-phones';
import { PhoneService } from './phone.service';
import { IPhoneList } from 'src/app/phones/phonelist.model';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {
  phones: IPhone[];
  selectedPhone: IPhone;

  constructor(private phoneService: PhoneService) {

  }

  ngOnInit() {
    this.getPhones();
  }

  onSelect(phone: IPhone): void {
    this.selectedPhone = phone;
  }

  getPhones(): void {
    this.phoneService.getPhones$().subscribe(data => {
      this.phones = data.phoneList;
    } );
  }

}
