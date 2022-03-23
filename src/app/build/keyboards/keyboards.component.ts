import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { KeyboardsService, keyboardsType } from 'src/app/Services/buildservice/keyboards.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';

@Component({
  selector: 'app-keyboards',
  templateUrl: './keyboards.component.html',
  styleUrls: ['./keyboards.component.scss']
})
export class KeyboardsComponent implements OnInit {
  keyboards!: keyboardsType[];

  constructor(
    private keyboardsservice: KeyboardsService, 
    private cartitemservice: CartItemService,
    private snack: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.keyboardsservice.getKeyboards().subscribe((data) => {
      this.keyboards = data;
    })
  }

  sendToCart(item: keyboardsType) {
    this.cartitemservice.getItems(item)
  }

  snackDisplay(message: string, action: any) {
    this.snack.open(message, action, {duration: 3000})
  }

}
