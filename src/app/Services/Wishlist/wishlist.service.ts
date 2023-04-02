import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItemsType } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishListItems: CartItemsType[] = [];
  filteredItems!: any[];
  
  wishListSubject = new BehaviorSubject<CartItemsType[]>(this.wishListItems);
  wishListFlow = this.wishListSubject.asObservable();

  constructor() { }

  sendItems(item: CartItemsType) {
    this.wishListItems.push(item);

    this.filteredItems = this.wishListItems.filter((element, index) => this.wishListItems.indexOf(element) !== index);
    this.filteredItems.forEach(element => {
      this.wishListItems.splice(this.wishListItems.indexOf(element), 1);
    });

    this.wishListSubject.next(this.wishListItems);
  }
}
