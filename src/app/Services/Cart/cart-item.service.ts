import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  items: any[] = [];
  filteredItems!: any[];

  constructor() { }

  getItems(item: any) {
    this.items.push(item);

    this.filteredItems = this.items.filter((element, index) => this.items.indexOf(element) !== index);
    this.filteredItems.forEach(element => {
      this.items[this.items.indexOf(element)].quantity++;
      this.items.splice(this.items.indexOf(element), 1);
    });
  }

  sendItems() {
    return of(this.items);
  }
}
