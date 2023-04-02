import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WishlistService } from '../Services/Wishlist/wishlist.service';
import { CartItemService } from '../Services/Cart/cart-item.service';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { CartItemsType } from '../model';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {
  @Input() pcPartName!: string;

  isLoading: boolean = true;
  pcParts!: CartItemsType[];

  fontawesome = {
    wishList: faHeart,
    details: faEye
  }

  constructor(private snack: MatSnackBar, private wishListService: WishlistService, private cartItemService: CartItemService) { }

  ngOnInit(): void {
    this.loadFakeLoading();
  }

  addItemToWishList(item: CartItemsType) {
    this.wishListService.sendItems(item);
  }

  sendItemToCart(item: CartItemsType) {
    this.cartItemService.sendItems(item);
  }


  displaySnackText(text: string, action: string) {
    this.snack.open(text, action, {duration: 3000});
  }

  loadFakeLoading() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

}
