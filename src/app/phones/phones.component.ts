import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPhone } from './phone.model';
import { PhoneService } from './phone.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {
  phones: IPhone[];
  selectedPhone: IPhone;
  idphone: IPhone;

  constructor(private phoneService: PhoneService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.phones = this.route.snapshot.data.message.phoneList;
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
