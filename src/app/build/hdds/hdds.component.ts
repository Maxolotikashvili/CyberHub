import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HddsService, hddsType } from 'src/app/Services/buildservice/hdds.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';

@Component({
  selector: 'app-hdds',
  templateUrl: './hdds.component.html',
  styleUrls: ['./hdds.component.scss']
})
export class HddsComponent implements OnInit {
  hdds!: hddsType[];

  constructor(
    private hddservice: HddsService,
    private cartitemservice: CartItemService,
    private snack: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.hddservice.getHdds().subscribe((data) => {
      this.hdds = data;
    })
  }

  sendToCart(item: hddsType) {
    this.cartitemservice.getItems(item)
  }

  snackDisplay(message: string, action: any) {
    this.snack.open(message, action, {duration: 3000})
  }

}
