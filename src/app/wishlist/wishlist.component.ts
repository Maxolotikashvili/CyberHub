import { Component, OnInit } from '@angular/core';
import { faCartShopping, faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';
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

  constructor(private wishlistservice: WishlistService) { }

  ngOnInit(): void {
    
     // Spinner Timeout
     this.spinnerboxshow = "spinnerboxshow";

     setTimeout(() => {
       this.spinnerboxshow = "spinnerboxhide";
       this.blur = "";
     }, 1000);
    
    this.wishlistservice.sendItems().subscribe((data) => {
      this.items = data;
    })
  }

  removeItem(item: any) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  clearCart() {
    this.items.splice(0, this.items.length);
  }

}
