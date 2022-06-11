import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface userType {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class SignService {
  data!: userType;

  constructor() { }

  getData(user: userType) {
    this.data = user
  }

  sendData() {
    return of(this.data);
  }

}
