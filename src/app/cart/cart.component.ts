import { Component, OnInit } from '@angular/core';
import { CartItemService } from '../Services/Cart/cart-item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items!: any[];

  constructor(private cartitemservice: CartItemService) { }

  ngOnInit(): void {

    // Receive Items
    this.cartitemservice.sendItems().subscribe((data) => {
      this.items = data;
    })
  }

  increaseQuantity(element: number) {
    element++
  }

  reduceQuantity(element: number) {
    element--
  }


}
