import { Component, OnInit } from '@angular/core';
import { faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CartItemService } from '../Services/Cart/cart-item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items!: any[];

  // Fontawesome
  xmark = faXmark;
  cart = faCartShopping;

  // Spinner
  spinnerboxshow = "spinnerboxshow";
  blur = "blur";

  constructor(private cartitemservice: CartItemService) { }

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
    this.cartitemservice.sendItems().subscribe((data) => {
      this.items = data;
    });
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
    this.items.splice(this.items.indexOf(item), 1)
  }

  // Clear Cart
  clearCart() {
    this.items.splice(0, this.items.length);
  }

  // Total Cost
  totalCost() {
    let total: number = 0;

    this.items.forEach(element => {
      total += element.price * element.quantity;
    });

    return total;
  }

}
