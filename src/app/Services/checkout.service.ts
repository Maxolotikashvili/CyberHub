import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  items!: any[];

  constructor() { }

  getItems(item: any) {
    this.items = item;
    this.items = this.items.filter(element => element.quantity > 0);
  }

  sendItems() {
    return of(this.items);
  }
}
