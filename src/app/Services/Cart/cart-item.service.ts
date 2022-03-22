import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  items: any[] = [];

  constructor() { }

  getItems(item: any) {
    this.items.push(item);
  }

  sendItems() {
    return of(this.items);
  }
}
