import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { HddsService, hddsType } from 'src/app/Services/buildservice/hdds.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';

@Component({
  selector: 'app-hdds',
  templateUrl: './hdds.component.html',
  styleUrls: ['./hdds.component.scss']
})
export class HddsComponent implements OnInit {
  hdds!: hddsType[];

  // Fontawesome
  eye = faEye;
  heart = faHeart;

  // Spinner
  spinnerboxshow = "spinnerboxshow";
  blur = "blur"; 

  constructor(
    private hddservice: HddsService,
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
