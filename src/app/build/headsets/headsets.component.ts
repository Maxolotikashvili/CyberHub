import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { HeadsetsService, headsetsType } from 'src/app/Services/buildservice/headsets.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';
import { WishlistService } from 'src/app/Services/Wishlist/wishlist.service';

@Component({
  selector: 'app-headsets',
  templateUrl: './headsets.component.html',
  styleUrls: ['./headsets.component.scss']
})
export class HeadsetsComponent implements OnInit {
  headsets!: headsetsType[];

  // Fontawesome
  eye = faEye;
  heart = faHeart;

  // Spinner
  spinnerboxshow = "spinnerboxshow";
  blur = "blur"; 

  constructor(
    private headsetsservice: HeadsetsService, 
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
     }, 1500);
     
    this.headsetsservice.getHeadsets().subscribe((data) => {
      this.headsets = data;
    })
  }

  addWishlist(item: any) {
    this.wishlistservice.getItems(item);
  }

  sendToCart(item: headsetsType) {
    this.cartitemservice.getItems(item)
  }

  snackDisplay(message: string, action: any) {
    this.snack.open(message, action, {duration: 3000})
  }

}
