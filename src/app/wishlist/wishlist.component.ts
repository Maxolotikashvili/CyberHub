import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faCartShopping, faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CartItemService } from '../Services/Cart/cart-item.service';
import { WishlistService } from '../Services/Wishlist/wishlist.service';
import { PcPartType } from '../model';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishListItems!: PcPartType[];

  fontawesome = {
    cart: faCartShopping,
    heart: faHeart,
    xmark: faXmark
  }

  constructor(
    private wishlistservice: WishlistService,
    private cartitemservice: CartItemService,
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
    this.wishlistservice.wishListFlow.subscribe((data: PcPartType[]) => {
      this.wishListItems = data
    });
  }

  //
  sendWishListItems(item: any) {
    this.cartitemservice.sendItems(item);
    this.wishListItems.splice(this.wishListItems.indexOf(item), 1);

    this.displaySnackMessage('Item Sent To Cart', 'Dismiss');
  }

  //
  removeItemFromCart(item: any) {
    this.wishListItems.splice(this.wishListItems.indexOf(item), 1);
  }

  //
  clearCart() {
    this.wishListItems.splice(0, this.wishListItems.length);
  }

  //
  displaySnackMessage(message: string, action: any) {
    this.snack.open(message, action, { duration: 3000 })
  }

}
