import { Component, OnInit } from '@angular/core';
import { PcPartType } from '../model';
import { WishlistService } from '../Services/Wishlist/wishlist.service';
import { CartItemService } from '../Services/Cart/cart-item.service';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-badge-component',
  templateUrl: './badge-component.component.html',
  styleUrls: ['./badge-component.component.scss']
})
export class BadgeComponentComponent implements OnInit {
  wishList: PcPartType[] = [];
  cartItems: PcPartType[] = [];

  fontawesome = {
    cart: faCartShopping,
    wishlist: faHeart
  }

  constructor(private wishListService: WishlistService, private cartItemService: CartItemService) { }

  ngOnInit(): void {
    this.getWishListtItems();
    this.getCartItems();
  }

  //
  getWishListtItems() {
   this.wishListService.wishListFlow.subscribe((data: PcPartType[]) => {
     this.wishList = data;
   });
  }

  //
  getCartItems() {
    this.cartItemService.cartItemsFlow.subscribe((cartItems: PcPartType[]) => {
      this.cartItems = cartItems;
    });
  }
}
