import { Injectable } from '@angular/core';
import { PcPartType } from 'src/app/model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { API_URL } from 'src/app/api-url';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  filteredItems!: PcPartType[];

  cartItemLength: number = 0;
  cartItemLengthSubject = new BehaviorSubject(this.cartItemLength);
  cartItemLengthObservable = this.cartItemLengthSubject.asObservable();

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  //
  addItemToCart(item: PcPartType): Observable<{message: string, cartLength?: number}> {
    return this.http.post<{ message: string, cartLength?: number }>(`${API_URL}cart`, item);
  };

  //
  getCartItems(): Observable<PcPartType[]> {
    return this.http.get<PcPartType[]>(`${API_URL}cart`);
  };

  //
  updateItemQuantity(quantity: number, cartItemId: number) {
    this.http.put(`${`${API_URL}cart`}/${cartItemId}`, { quantity: quantity }).subscribe();
  }

  //
  deleteItemFromCart(item: PcPartType | string): Observable<number> {
    if (typeof item === 'string') {
      return this.http.delete<number>(`${`${API_URL}cart`}/${item}`);
    } else {
      return this.http.delete<number>(`${`${API_URL}cart`}/${item.id}`);
    }
  }

  //
  updateCheckout(): Observable<number> {
    return this.http.get<number>(`${API_URL}checkout`);
  }

  //
  changeCartItemLength(param: number) {
    this.cartItemLength = param;
    this.cartItemLengthSubject.next(this.cartItemLength);
  }
}
