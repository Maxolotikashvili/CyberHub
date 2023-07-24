import { Injectable } from '@angular/core';
import { PcPartType } from 'src/app/model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  filteredItems!: PcPartType[];
  API_URL: string = 'http://localhost:3000/cart';
  
  cartItemLength: number = 0;
  cartItemLengthSubject = new BehaviorSubject(this.cartItemLength);
  cartItemLengthObservable = this.cartItemLengthSubject.asObservable();

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  //
  sendItems(item: PcPartType) {
    this.http.post<{message: string, cartLength?: number}>(this.API_URL, item).subscribe({
      next: (response: {message: string, cartLength?: number}) => {
        this.snack.open(response.message, 'Dismiss', { duration: 3000 });
        this.changeCartItemLength(response.cartLength!);
        console.log(response.cartLength)
      },

      error: (err: HttpErrorResponse) => {
        console.log('Error adding item to cart:', err);
        this.snack.open('Error adding item to cart', 'Dismiss', { duration: 3000 });
      }
    });
  };

  //
  getCartItems(): Observable<PcPartType[]> {
    return this.http.get<PcPartType[]>(this.API_URL);
  };

  //
  updateItemQuantity(quantity: number, cartItemId: number) {
    this.http.put(`${this.API_URL}/${cartItemId}`, {quantity: quantity}).subscribe();
  }

  //
  deleteItemFromCart(item: PcPartType): Observable<number> {
    return this.http.delete<number>(`${this.API_URL}/${item.id}`);
  }

  //
  changeCartItemLength(param: number) {
    this.cartItemLength = param;
    this.cartItemLengthSubject.next(this.cartItemLength);
  }
}
