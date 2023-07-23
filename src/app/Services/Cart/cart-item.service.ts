import { Injectable } from '@angular/core';
import { PcPartType } from 'src/app/model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  filteredItems!: PcPartType[];
  API_URL: string = 'http://localhost:3000/cart';

  cartItemLength: number = 0;
  cartItemsLengthSubject = new BehaviorSubject<number>(this.cartItemLength);
  cartItemsLengthObservableForMatBadge = this.cartItemsLengthSubject.asObservable();

  constructor(private http: HttpClient) { }

  // sendItems(item: PcPartType) {
  //   this.cartItems.push(item);

  //   this.filteredItems = this.cartItems.filter((element, index) => this.cartItems.indexOf(element) !== index);
  //   this.filteredItems.forEach(element => {
  //     this.cartItems[this.cartItems.indexOf(element)].quantity++;
  //     this.cartItems.splice(this.cartItems.indexOf(element), 1);
  //   });
  
  //   this.cartItemsSubject.next(this.cartItems);
  // }

  //
  sendItems(item: PcPartType): Observable<string> {
    this.cartItemLength++;
    this.cartItemsLengthSubject.next(this.cartItemLength);
    return this.http.post<string>(this.API_URL, item);
  };

  //
  getCartItems(): Observable<PcPartType[]> {
    return this.http.get<PcPartType[]>(this.API_URL);
  };

  //
  updateItemQuantity(quantity: number, cartItemId: number): Observable<PcPartType> {
    return this.http.put<PcPartType>(`${this.API_URL}/${cartItemId}`, {quantity: quantity});
  }

  //
  deleteItemFromCart(item: PcPartType): Observable<PcPartType> {
    return this.http.delete<PcPartType>(`${this.API_URL}/${item.id}`);
  }
}
