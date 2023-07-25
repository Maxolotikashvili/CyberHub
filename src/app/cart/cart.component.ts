import { Component, OnInit } from '@angular/core';
import { faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CartItemService } from '../Services/Cart/cart-item.service';
import { PcPartType } from '../model';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: PcPartType[] = [];
  filteredItems!: PcPartType[];
  isLoading!: boolean;

  fontawesome = {
    xmark: faXmark,
    cart: faCartShopping
  }

  constructor(
    private cartitemservice: CartItemService,
    private matSnack: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.scrollToTopOnComponentLoad();
    this.downloadApiData();
  }

  //
  scrollToTopOnComponentLoad() {
    window.scrollTo(0, 0);
  }

  //
  changeQuantity(element: PcPartType, index: number) {
    if (index === 1) {
      if (element.quantity > 0) {
        element.quantity--
      }
    } else if (index === 2) {
      element.quantity++
    };

    this.cartitemservice.updateItemQuantity(element.quantity, element.id)
  };

  //
  downloadApiData() {
    this.cartitemservice.getCartItems().subscribe((items: PcPartType[]) => {
      this.cartItems = items;
    });
  }

  //
  deleteItemFromCart(item: PcPartType) {
    this.isLoading = true;

    this.cartitemservice.deleteItemFromCart(item).subscribe({
      next: (response: number) => {
        this.cartItems = this.cartItems.filter((parts: PcPartType) => parts.id !== item.id);
        this.matSnack.open('Item removed from cart', 'Dismiss', { duration: 3000 });
        this.cartitemservice.changeCartItemLength(response);
      },

      error: (error: HttpErrorResponse) => {
        console.log(error)
        this.matSnack.open('Error removing item from cart', 'Dismiss', { duration: 5000 });
      },

      complete: () => {
        this.isLoading = false;
      }
    })
  }

  //
  clearCart() {
    this.cartitemservice.deleteItemFromCart('deleteAll').subscribe({
      next: (response: number) => {
        this.cartItems.splice(0, this.cartItems.length);
        this.matSnack.open('Cart cleared', 'Dismiss', { duration: 3000 });
        this.cartitemservice.changeCartItemLength(response);
      },

      error: (error: HttpErrorResponse) => {
        console.log(`Error clearing the cart: ${error}`);
        this.matSnack.open('Error clearing the cart', 'Dismiss', { duration: 5000 });
      }
    });
  }

  //
  calculatetotalItemsQuantity() {
    let total: number = 0;
    this.cartItems.forEach(element => {
      total += element.quantity!
    });

    return total;
  }

  //
  calculateItemsTotalCost() {
    let total: number = 0;

    this.cartItems.forEach(element => {
      total += element.price * element.quantity!;
    });

    return total;
  }

  //
  sendItemsToCheckout() {
    this.cartitemservice.updateCheckout().subscribe({
      next: (res: number) => {
        this.cartitemservice.changeCartItemLength(res);
      },

      error: (err: HttpErrorResponse) => {
        console.error(`Error advancing to checkout: ${err}`);
      }
    });
  }
}
