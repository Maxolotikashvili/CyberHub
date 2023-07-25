import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../Services/Wishlist/wishlist.service';
import { CartItemService } from '../Services/Cart/cart-item.service';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-badge-component',
  templateUrl: './badge-component.component.html',
  styleUrls: ['./badge-component.component.scss']
})
export class BadgeComponentComponent implements OnInit {
  wishListLength: number = 0;
  cartItemsLength: number = 0;

  fontawesome = {
    cart: faCartShopping,
    wishlist: faHeart
  }

  constructor(private wishListService: WishlistService, private cartItemService: CartItemService) { }

  ngOnInit(): void {
    this.getCartLength();
    this.getWishListLength();
  }

  //
  getCartLength() {
    this.cartItemService.cartItemLengthObservable.subscribe((cartLength: number) => {
      this.cartItemsLength = cartLength;
    });
  }

  //
  getWishListLength() {
    this.wishListService.wishListItemLengthObservable.subscribe((length: number) => {
      this.wishListLength = length;
    })
  }
}
