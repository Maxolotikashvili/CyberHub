import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HeadsetsService, headsetsType } from 'src/app/Services/buildservice/headsets.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';

@Component({
  selector: 'app-headsets',
  templateUrl: './headsets.component.html',
  styleUrls: ['./headsets.component.scss']
})
export class HeadsetsComponent implements OnInit {
  headsets!: headsetsType[];

  constructor(
    private headsetsservice: HeadsetsService, 
    private cartitemservice: CartItemService,
    private snack: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.headsetsservice.getHeadsets().subscribe((data) => {
      this.headsets = data;
    })
  }

  sendToCart(item: headsetsType) {
    this.cartitemservice.getItems(item)
  }

  snackDisplay(message: string, action: any) {
    this.snack.open(message, action, {duration: 3000})
  }

}
