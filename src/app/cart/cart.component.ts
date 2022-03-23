import { Component, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { CartItemService } from '../Services/Cart/cart-item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items!: any[];

  xmark = faXmark;

  somenumber!: number;
  constructor(private cartitemservice: CartItemService) { }

  ngOnInit(): void {

    // Receive Items
    this.cartitemservice.sendItems().subscribe((data) => {
      this.items = data;
    })
  }

  increaseQuantity(element: any) {
    element.quantity++
  }

  reduceQuantity(element: any) {
    if(element.quantity > 0) {
      element.quantity--
    }
  }

  removeItem(item: any) {
    this.items.splice(item, 1)
  }

}
