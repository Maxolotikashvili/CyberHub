import { Component, OnInit } from '@angular/core';
import { RamsService, ramsType } from 'src/app/Services/buildservice/rams.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';

@Component({
  selector: 'app-rams',
  templateUrl: './rams.component.html',
  styleUrls: ['./rams.component.scss']
})
export class RamsComponent implements OnInit {
  rams!: ramsType[];

  constructor(private ramsservice: RamsService, private cartitemservice: CartItemService) { }

  ngOnInit(): void {
    this.ramsservice.getRams().subscribe((data) => {
      this.rams = data;
    })
  }

  sendToCart(item: ramsType) {
    this.cartitemservice.getItems(item)
  }

}
