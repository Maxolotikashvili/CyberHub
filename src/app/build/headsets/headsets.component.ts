import { Component, OnInit } from '@angular/core';
import { HeadsetsService, headsetsType } from 'src/app/Services/buildservice/headsets.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';

@Component({
  selector: 'app-headsets',
  templateUrl: './headsets.component.html',
  styleUrls: ['./headsets.component.scss']
})
export class HeadsetsComponent implements OnInit {
  headsets!: headsetsType[];

  constructor(private headsetsservice: HeadsetsService, private cartitemservice: CartItemService) { }

  ngOnInit(): void {
    this.headsetsservice.getHeadsets().subscribe((data) => {
      this.headsets = data;
    })
  }

  sendToCart(item: headsetsType) {
    this.cartitemservice.getItems(item)
  }

}
