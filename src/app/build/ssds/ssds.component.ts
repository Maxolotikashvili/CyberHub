import { Component, OnInit } from '@angular/core';
import { SsdsService, ssdsType } from 'src/app/Services/buildservice/ssds.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';

@Component({
  selector: 'app-ssds',
  templateUrl: './ssds.component.html',
  styleUrls: ['./ssds.component.scss']
})
export class SsdsComponent implements OnInit {
  ssds!: ssdsType[];

  constructor(private ssdsservice: SsdsService, private cartitemservice: CartItemService) { }

  ngOnInit(): void {
    this.ssdsservice.getSsds().subscribe((data) => {
      this.ssds = data;
    })
  }

  sendToCart(item: ssdsType) {
    this.cartitemservice.getItems(item)
  }

}
