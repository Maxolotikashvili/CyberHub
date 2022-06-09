import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faCartShopping, faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CartItemService } from '../Services/Cart/cart-item.service';
import { WishlistService } from '../Services/Wishlist/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  // Items
  items!: any[];

  // FontAwesome
  cart = faCartShopping;
  heart = faHeart;
  xmark = faXmark;

  spinnerboxshow = "spinnerboxshow"
  blur = "blur";

  constructor(
    private wishlistservice: WishlistService,
    private cartitemservice: CartItemService,
    private snack: MatSnackBar
  ) { }

  ngOnInit(): void {

    // Spinner Timeout
    this.spinnerboxshow = "spinnerboxshow";

    setTimeout(() => {
      this.spinnerboxshow = "spinnerboxhide";
      this.blur = "";
    }, 1000);


    //  Wishlist
    this.wishlistservice.sendItems().subscribe((data) => {
      this.items = data
    });
  }

  sendItems(item: any) {
    this.cartitemservice.getItems(item);
    this.items.splice(this.items.indexOf(item), 1)
  }

  removeItem(item: any) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  clearCart() {
    this.items.splice(0, this.items.length);
  }

  snackDisplay(message: string, action: any) {
    this.snack.open(message, action, { duration: 3000 })
  }

}
