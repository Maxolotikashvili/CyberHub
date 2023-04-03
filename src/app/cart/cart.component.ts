import { Component, OnInit } from '@angular/core';
import { faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CartItemService } from '../Services/Cart/cart-item.service';
import { CheckoutService } from '../Services/checkout.service';
import { PcPartType } from '../model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems!: PcPartType[];
  filteredItems!: PcPartType[];

  fontawesome = {
    xmark: faXmark,
    cart: faCartShopping
  }

  constructor(private cartitemservice: CartItemService, private checkoutservice: CheckoutService) { }

  ngOnInit(): void {
    this.scrollToTopOnComponentLoad();
    this.downloadApiData();
  }

  //
  scrollToTopOnComponentLoad() {
    window.scrollTo(0, 0);
  }

  //
  changeQuantity(element: any, index: number) {
    if (index === 1) {
      if (element.quantity > 0) {
        element.quantity--
      }
    } else if (index === 2) {
      element.quantity++;
    };
  };

  //
  downloadApiData() {
    this.cartitemservice.cartItemsFlow.subscribe((cartItems: PcPartType[]) => {
      this.cartItems = cartItems;
    })
  }

  //
  spliceItemFromCart(item: any) {
    this.cartItems[this.cartItems.indexOf(item)].quantity = 1;
    this.cartItems.splice(this.cartItems.indexOf(item), 1);
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

    return total
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
