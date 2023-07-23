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
  wishlistLength!: number;
  cartItemsLength!: number;

  fontawesome = {
    cart: faCartShopping,
    wishlist: faHeart
  }

  constructor(private wishListService: WishlistService, private cartItemService: CartItemService) { }

  ngOnInit(): void {
    this.getWishListtItemsLength();
    this.getCartItemsLength();
  }

  //
  getWishListtItemsLength() {
   this.wishListService.wishListFlow.subscribe((data: PcPartType[]) => {
     this.wishlistLength = data.length;
   });
  }

  //
  getCartItemsLength() {
    this.cartItemService.cartItemsLengthObservableForMatBadge.subscribe((res) => {
      this.cartItemsLength = res;
    })
  }
}
