import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PsusService, psusType } from 'src/app/Services/buildservice/psus.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';

@Component({
  selector: 'app-psus',
  templateUrl: './psus.component.html',
  styleUrls: ['./psus.component.scss']
})
export class PsusComponent implements OnInit {
  psus!: psusType[];

  constructor(
    private psuservice: PsusService, 
    private cartitemservice: CartItemService,
    private snack: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.psuservice.getPsus().subscribe((data) => {
      this.psus = data;
    })
  }

  sendToCart(item: psusType) {
    this.cartitemservice.getItems(item)
  }

  snackDisplay(message: string, action: any) {
    this.snack.open(message, action, {duration: 3000})
  }

}
