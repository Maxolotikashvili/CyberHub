import { Component, OnInit } from '@angular/core';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { CartItemService } from './Services/Cart/cart-item.service';
import { WishlistService } from './Services/Wishlist/wishlist.service';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PcPartType } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Cyberhub';

  responsiveMode!: boolean;
  burgerBar = 'burger-bar'

  wishList: PcPartType[] = [];
  cartItems: PcPartType[] = [];

  fontawesome = {
    cart: faCartShopping,
    wishlist: faHeart
  }

  isUserLoggedIn!: boolean;
  userName!: string;

  constructor(private wishListService: WishlistService, private cartItemService: CartItemService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.checkIfUserIsLoggedIn();
    this.getWishListtItems();
    this.getCartItems();
  }

  //
  checkIfUserIsLoggedIn() {
    this.isUserLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')!);
    this.userName = JSON.parse(localStorage.getItem('userRegistrationData')!)?.name;
  } 

  //
  signOutUser() {
    localStorage.removeItem('isLoggedIn');
    location.reload();
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

  //
  openUserLoginComponent() {
    this.dialog.open(LoginComponent);
  }

  //
  openUserRegisterComponent() {
    this.dialog.open(RegisterComponent);
  }

  //
  animateBurgerBar() {
    if (!this.responsiveMode) {
      this.burgerBar = 'responsive-burger-bar';
      this.responsiveMode = !this.responsiveMode;
    } else {
      this.burgerBar = '';
      this.responsiveMode = !this.responsiveMode;
    }
  }
}