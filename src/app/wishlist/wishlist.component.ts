import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faCartShopping, faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CartItemService } from '../Services/Cart/cart-item.service';
import { WishlistService } from '../Services/Wishlist/wishlist.service';
import { PcPartType } from '../model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishListItems: PcPartType[] = [];

  fontawesome = {
    cart: faCartShopping,
    heart: faHeart,
    xmark: faXmark
  }

  constructor(
    private wishlistservice: WishlistService,
    private cartItemService: CartItemService,
    private snack: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.scrollToTopOnComponentLoad();
    this.downloadApiData();
  }

  //
  scrollToTopOnComponentLoad() {
    window.scrollTo(0, 0);
  }

  //
  downloadApiData() {
    this.wishlistservice.getWishlistItems().subscribe({
      next: (data: PcPartType[]) => {
        this.wishListItems = data;
      },

      error: (err: HttpErrorResponse) => {
        console.error(err);
        this.displaySnackMessage('Error fetching data');
      }
    })
  };

  //
  sendWishListItems(item: PcPartType) {
    this.cartItemService.addItemToCart(item).subscribe({
      next: (res: {message: string, cartLength?: number}) => {
        this.displaySnackMessage(res.message);
        this.wishlistservice.deleteItemFromWishlist(item).subscribe({
          next: (res: number) => {
            this.wishlistservice.updateWishListLength(res);
            this.wishListItems.splice(this.wishListItems.indexOf(item), 1);
          },

          error: (err: HttpErrorResponse) => {
            console.error(`Couldn't remove item from wishlist: ${err}`);
          }
        })

        if (res.cartLength) {
          this.cartItemService.changeCartItemLength(res.cartLength);
        }
      },

      error: (err: HttpErrorResponse) => {
        console.error(`Error sending item to cart: ${err}`);
        this.displaySnackMessage('Erro sending item to cart');
      }
    });

  }

  //
  removeItemFromWishlist(item: PcPartType | 'deleteAll') {
    this.wishlistservice.deleteItemFromWishlist(item).subscribe({
      next: (res: number) => {
        this.wishlistservice.updateWishListLength(res);

        if (typeof item === 'string') {
          this.wishListItems.splice(0, this.wishListItems.length);
          this.displaySnackMessage('Wishlist cleared');
        } else {
          this.wishListItems = this.wishListItems.filter((items: PcPartType) => items.id !== item.id);
          this.displaySnackMessage('Item removed from wishlist')
        }
      },
      
      error: (err: HttpErrorResponse) => {
        console.error(`Error removing items from wishlist: ${err}`);
        this.displaySnackMessage('Error updating wishlist');
      }
    });
  }

  //
  displaySnackMessage(message: string) {
    this.snack.open(message, 'Dismiss', { duration: 3000 })
  }

}
