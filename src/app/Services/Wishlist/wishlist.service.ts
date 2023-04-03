import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PcPartType } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishListItems: PcPartType[] = [];
  filteredItems!: any[];
  
  wishListSubject = new BehaviorSubject<PcPartType[]>(this.wishListItems);
  wishListFlow = this.wishListSubject.asObservable();

  constructor() { }

  sendItems(item: PcPartType) {
    this.wishListItems.push(item);

    this.filteredItems = this.wishListItems.filter((element, index) => this.wishListItems.indexOf(element) !== index);
    this.filteredItems.forEach(element => {
      this.wishListItems.splice(this.wishListItems.indexOf(element), 1);
    });

    this.wishListSubject.next(this.wishListItems);
  }
}
