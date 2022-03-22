import { Component, OnInit } from '@angular/core';
import { PsusService, psusType } from 'src/app/Services/buildservice/psus.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';

@Component({
  selector: 'app-psus',
  templateUrl: './psus.component.html',
  styleUrls: ['./psus.component.scss']
})
export class PsusComponent implements OnInit {
  psus!: psusType[];

  constructor(private psuservice: PsusService, private cartitemservice: CartItemService) { }

  ngOnInit(): void {
    this.psuservice.getPsus().subscribe((data) => {
      this.psus = data;
    })
  }

  sendToCart(item: psusType) {
    this.cartitemservice.getItems(item)
  }

}
