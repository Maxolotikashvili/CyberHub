import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { KeyboardsService, keyboardsType } from 'src/app/Services/buildservice/keyboards.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';

@Component({
  selector: 'app-keyboards',
  templateUrl: './keyboards.component.html',
  styleUrls: ['./keyboards.component.scss']
})
export class KeyboardsComponent implements OnInit {
  keyboards!: keyboardsType[];

  // Fontawesome
  eye = faEye;
  heart = faHeart;

  // Spinner
  spinnerboxshow = "spinnerboxshow";
  blur = "blur"; 

  constructor(
    private keyboardsservice: KeyboardsService, 
    private cartitemservice: CartItemService,
    private snack: MatSnackBar
    ) { }

  ngOnInit(): void {

     // Spinner Timeout
     this.spinnerboxshow = "spinnerboxshow";

     setTimeout(() => {
       this.spinnerboxshow = "spinnerboxhide";
       this.blur = "";
     }, 1500);

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
