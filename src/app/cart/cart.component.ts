import { Component, OnInit } from '@angular/core';
import { faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CartItemService } from '../Services/Cart/cart-item.service';
import { CheckoutService } from '../Services/checkout.service';
import { CartItemsType } from '../model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems!: CartItemsType[];
  filteredItems!: CartItemsType[];
  itemQuantity!: any;

  // Fontawesome
  xmark = faXmark;
  cart = faCartShopping;

  // Spinner
  spinnerboxshow = "spinnerboxshow";
  blur = "blur";

  constructor(private cartitemservice: CartItemService, private checkoutservice: CheckoutService) { }

  ngOnInit(): void {

    // Scroll Up
    window.scrollTo(0, 0);

    // Spinner Timeout
    this.spinnerboxshow = "spinnerboxshow";

    setTimeout(() => {
      this.spinnerboxshow = "spinnerboxhide";
      this.blur = "";
    }, 1400);

    // Get Items
    this.cartitemservice.cartItemsFlow.subscribe((cartItems: CartItemsType[]) => {
      this.cartItems = cartItems;
    })

  }

  changeQuantity(element: any, index: number) {
    if (index === 1) {
      if (element.quantity > 0) {
        element.quantity--
      }
    } else if (index === 2) {
      element.quantity++;
    };
  };

  // Remove Items
  removeItem(item: any) {
    this.cartItems[this.cartItems.indexOf(item)].quantity = 1;
    this.cartItems.splice(this.cartItems.indexOf(item), 1);
  }

  // Clear Cart
  clearCart() {
    for (let item of this.cartItems) {
      item.quantity = 1;
    }
    
    this.cartItems.splice(0, this.cartItems.length);
  }

  // Total Items
  totalItems() {
    let total: number = 0;
    this.cartItems.forEach(element => {
      total += element.quantity
    });

    return total
  }

  // Total Cost
  totalCost() {
    let total: number = 0;

    this.cartItems.forEach(element => {
      total += element.price * element.quantity;
    });

    return total;
  }

  // Send Items To Checkout
  sendToCheckout() {
    this.checkoutservice.getItems(this.cartItems);
  }

}
