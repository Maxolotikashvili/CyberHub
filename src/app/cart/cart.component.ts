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

  total: number = 0; 

  // Fontawesome
  xmark = faXmark;
  cart = faCartShopping;

  // Spinner
  spinnerboxshow = "spinnerboxshow";
  blur = "blur";

  constructor(private cartitemservice: CartItemService) { }

  ngOnInit(): void {

    // Spinner Timeout
    this.spinnerboxshow = "spinnerboxshow";

    setTimeout(() => {
      this.spinnerboxshow = "spinnerboxhide";
      this.blur = "";
    }, 1400);

    // Receive Items
    this.cartitemservice.sendItems().subscribe((data) => {
      this.items = data;
    });
  }

  increaseQuantity(element: any) {
    element.quantity++
  }

  reduceQuantity(element: any) {
    if (element.quantity > 0) {
      element.quantity--
    }
  }

  removeItem(item: any) {
    this.items.splice(this.items.indexOf(item), 1)
  }

  clearCart() {
    this.items.splice(0, this.items.length);
  }

}
