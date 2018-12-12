import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PhoneService } from './phone.service';
import { IPhoneList } from './phonelist.model';

@Injectable()
export class PhoneResolver implements Resolve<Observable<IPhoneList>> {
    constructor(private phoneService: PhoneService) {}

    resolve() {
        return this.phoneService.getPhones$();
    }
}
