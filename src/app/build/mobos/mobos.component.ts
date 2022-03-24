import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { MobosService, mobosType } from 'src/app/Services/buildservice/mobos.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';

@Component({
  selector: 'app-mobos',
  templateUrl: './mobos.component.html',
  styleUrls: ['./mobos.component.scss']
})
export class MobosComponent implements OnInit {
  mobos!: mobosType[];

  // Fontawesome
  eye = faEye;
  heart = faHeart;

  // Spinner
  spinnerboxshow = "spinnerboxshow";
  blur = "blur"; 

  constructor(
    private mobosservice: MobosService, 
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

    // Get MOBO-s
    this.mobosservice.getMobos().subscribe((data) => {
      this.mobos = data;
    })
  }

  sendToCart(item: mobosType) {
    this.cartitemservice.getItems(item)
  }

  snackDisplay(message: string, action: any) {
    this.snack.open(message, action, {duration: 3000})
  }

}
