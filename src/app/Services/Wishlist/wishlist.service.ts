import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../api-url';
import { BehaviorSubject, Observable } from 'rxjs';
import { PcPartType } from 'src/app/model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishListItemLength: number = 0;
  wishListItemLengthSubject = new BehaviorSubject(this.wishListItemLength);
  wishListItemLengthObservable = this.wishListItemLengthSubject.asObservable();

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  //
  getWishlistItems(): Observable<PcPartType[]> {
    return this.http.get<PcPartType[]>(`${API_URL}wishlist`);
  }

  //
  addItemToWishList(item: PcPartType): Observable<{message: string, wishListLength?: number}> {
    return this.http.post<{message: string, wishListLength?: number}>(`${API_URL}wishlist`, item);
  }

  //
  deleteItemFromWishlist(item: PcPartType | string): Observable<number> {
    if (typeof item === 'string') {
      return this.http.delete<number>(`${API_URL}wishlist/${item}`);
    } else {
      return this.http.delete<number>(`${API_URL}wishlist/${item.id}`);
    }
  }

  //
  getWishlistLength() {
    this.http.get<number>(`${API_URL}wishlistLength`).subscribe((res: number) => {
      this.updateWishListLength(res);
    })
  }

  //
  updateWishListLength(param: number) {
    this.wishListItemLength = param;
    this.wishListItemLengthSubject.next(this.wishListItemLength);
  }
}
