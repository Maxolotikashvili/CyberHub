import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { SsdsService, ssdsType } from 'src/app/Services/buildservice/ssds.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';
import { WishlistService } from 'src/app/Services/Wishlist/wishlist.service';

@Component({
  selector: 'app-ssds',
  templateUrl: './ssds.component.html',
  styleUrls: ['./ssds.component.scss']
})
export class SsdsComponent implements OnInit {
  ssds!: ssdsType[];

  // Fontawesome
  eye = faEye;
  heart = faHeart;

  // Spinner
  spinnerboxshow = "spinnerboxshow";
  blur = "blur"; 

  constructor(
    private ssdsservice: SsdsService, 
    private wishlistservice: WishlistService,
    private cartitemservice: CartItemService,
    private snack: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.ssdsservice.getSsds().subscribe((data) => {
      this.ssds = data;
    })

     // Spinner Timeout
     this.spinnerboxshow = "spinnerboxshow";

     setTimeout(() => {
       this.spinnerboxshow = "spinnerboxhide";
       this.blur = "";
     }, 1500);
     
  }

  addWishlist(item: any) {
    this.wishlistservice.getItems(item);
  }

  sendToCart(item: ssdsType) {
    this.cartitemservice.getItems(item)
  }

  snackDisplay(message: string, action: any) {
    this.snack.open(message, action, {duration: 3000})
  }

}
