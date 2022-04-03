import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faCartShopping, faCopyright, faHeart } from '@fortawesome/free-solid-svg-icons';
import { CartItemService } from './Services/Cart/cart-item.service';
import { WishlistService } from './Services/Wishlist/wishlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Cyberhub';

  items!: any[];
  wishes!: any[];

  facebook = faFacebook;
  twitter = faTwitter;
  youtube = faYoutube;
  bar = faBars;
  cart = faCartShopping;
  heart = faHeart;

  copyright = faCopyright;

  constructor(private cartitemservice: CartItemService, private wishlistservice: WishlistService) {}

  ngOnInit(): void {
    // Wishlist Items
    this.wishlistservice.sendItems().subscribe((data) => {
      this.wishes = data;
    })

    // Cart Items
    this.cartitemservice.sendItems().subscribe((data) => {
      this.items = data;
    })
  }
}
