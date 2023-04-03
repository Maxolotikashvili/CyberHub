import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PcPartType } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  cartItems: PcPartType[] = []
  filteredItems!: PcPartType[];

  cartItemsSubject = new BehaviorSubject<PcPartType[]>(this.cartItems);
  cartItemsFlow = this.cartItemsSubject.asObservable();

  constructor() { }

  sendItems(item: PcPartType) {
    this.cartItems.push(item);

    this.filteredItems = this.cartItems.filter((element, index) => this.cartItems.indexOf(element) !== index);
    this.filteredItems.forEach(element => {
      this.cartItems[this.cartItems.indexOf(element)].quantity++;
      this.cartItems.splice(this.cartItems.indexOf(element), 1);
    });
  
    this.cartItemsSubject.next(this.cartItems);
  }
}
