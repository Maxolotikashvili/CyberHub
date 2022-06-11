import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faCartShopping, faCopyright, faHeart } from '@fortawesome/free-solid-svg-icons';
import { CartItemService } from './Services/Cart/cart-item.service';
import { WishlistService } from './Services/Wishlist/wishlist.service';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SignService } from './Services/sign.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Cyberhub';

  // Cart & Wishlist
  wishes!: any[];
  items!: any[];

  // Fontawesome
  facebook = faFacebook;
  twitter = faTwitter;
  youtube = faYoutube;
  bar = faBars;
  cart = faCartShopping;
  heart = faHeart;
  copyright = faCopyright;
  bars = faBars;

  // Responsive
  show: boolean = true;

  constructor(
    private cartitemservice: CartItemService,
    private wishlistservice: WishlistService,
    private signservice: SignService,
    private dialog: MatDialog
  ) { }


  ngOnInit(): void {

    // Get Wishlist Items
    this.wishlistservice.sendItems().subscribe((data) => {
      this.wishes = data;
    });

    // Get Cart Items
    this.cartitemservice.sendItems().subscribe((data) => {
      this.items = data;
    });

  }

  badgeDisplay() {
    let total: number = 0;

    this.items.forEach(element => {
      total += element.quantity;
    })

    return total
  }

  // Open Login Component
  openLogin() {
    this.dialog.open(LoginComponent);
  }

  // Open Register Component
  openRegister() {
    this.dialog.open(RegisterComponent);
  }

  // Burger Bar
  openMenu() {
    this.show = !this.show;
  }

}