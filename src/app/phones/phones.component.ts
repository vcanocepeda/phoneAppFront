import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPhone } from './phone.model';
import { PhoneService } from './phone.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';

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
    const eventValue = event.target.value;

    // if it's not a number we dont trigger the request
    if (!isNaN(Number(eventValue))) {
    this.phoneService.getPhone$(eventValue).subscribe( (eventService: HttpEvent<IPhone>) => {
      switch (eventService.type) {
        case HttpEventType.Sent:
          console.log('Request sent!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header received!');
          break;
        case HttpEventType.DownloadProgress:
          const kbLoaded = Math.round(eventService.loaded / 1024);
          console.log(`Download in progress! ${kbLoaded}Kb loaded`);
          break;
        case HttpEventType.Response:
          console.log('😺 Done!', eventService.body);
          this.idphone = eventService.body as IPhone;
      }
      });
    }
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
