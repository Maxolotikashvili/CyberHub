import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { RamsService, ramsType } from 'src/app/Services/buildservice/rams.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';

@Component({
  selector: 'app-rams',
  templateUrl: './rams.component.html',
  styleUrls: ['./rams.component.scss']
})
export class RamsComponent implements OnInit {
  rams!: ramsType[];

  // Fontawesome
  eye = faEye;
  heart = faHeart;

  // Spinner
  spinnerboxshow = "spinnerboxshow";
  blur = "blur"; 

  constructor(
    private ramsservice: RamsService, 
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
     
    this.ramsservice.getRams().subscribe((data) => {
      this.rams = data;
    })
  }

  sendToCart(item: ramsType) {
    this.cartitemservice.getItems(item)
  }

  snackDisplay(message: string, action: any) {
    this.snack.open(message, action, {duration: 3000})
  }

}
