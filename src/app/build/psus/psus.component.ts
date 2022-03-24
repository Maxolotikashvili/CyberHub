import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { PsusService, psusType } from 'src/app/Services/buildservice/psus.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';

@Component({
  selector: 'app-psus',
  templateUrl: './psus.component.html',
  styleUrls: ['./psus.component.scss']
})
export class PsusComponent implements OnInit {
  psus!: psusType[];

  // Fontawesome
  eye = faEye;
  heart = faHeart;

  // Spinner
  spinnerboxshow = "spinnerboxshow";
  blur = "blur"; 

  constructor(
    private psuservice: PsusService, 
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
