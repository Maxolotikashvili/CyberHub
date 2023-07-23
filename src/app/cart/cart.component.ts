import { Component, OnInit } from '@angular/core';
import { faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CartItemService } from '../Services/Cart/cart-item.service';
import { CheckoutService } from '../Services/checkout.service';
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

  fontawesome = {
    xmark: faXmark,
    cart: faCartShopping
  }

  constructor(
    private cartitemservice: CartItemService, 
    private checkoutservice: CheckoutService,
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
  async changeQuantity(element: PcPartType, index: number) {
    if (index === 1) {
      if (element.quantity > 0) {
        element.quantity--
      }
    } else if (index === 2) {
      element.quantity++
    };

    this.cartitemservice.updateItemQuantity(element.quantity, element.id).subscribe((newItem: PcPartType) => {
      element = newItem;
    });
  };

  //
  async downloadApiData() {
    this.cartitemservice.getCartItems().subscribe((items: PcPartType[]) => {
      this.cartItems = items;
    });
  }

  //
  async deleteItemFromCart(item: PcPartType) {
    this.cartitemservice.deleteItemFromCart(item).subscribe({
      next: (deletedItem: PcPartType) => {
        this.cartItems = this.cartItems.filter((item: PcPartType) => item.id !== deletedItem.id)
      },

      error: (error: HttpErrorResponse) => {
        this.matSnack.open(error.message, 'Dismiss', { duration: 3000 });
      }
    })
  }

  //
  clearCart() {
    for (let item of this.cartItems) {
      item.quantity = 1;
    }
    
    this.cartItems.splice(0, this.cartItems.length);
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
    this.checkoutservice.getItems(this.cartItems);
  }
}
