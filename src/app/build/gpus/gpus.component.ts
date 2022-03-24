import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { GpusService, gpusType } from 'src/app/Services/buildservice/gpus.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';

@Component({
  selector: 'app-gpus',
  templateUrl: './gpus.component.html',
  styleUrls: ['./gpus.component.scss']
})
export class GpusComponent implements OnInit {
  gpus!: gpusType[];

  // Fontawesome
  eye = faEye;
  heart = faHeart;

  // Spinner
  spinnerboxshow = "spinnerboxshow";
  blur = "blur"; 

  constructor(
    private gpusservice: GpusService,
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
    
    // Get Gpus 
    this.gpusservice.getGpus().subscribe((data: gpusType[]) => {
        this.gpus = data;
      })

  }

  sendToCart(item: gpusType) {
    this.cartitemservice.getItems(item)
  }

  snackDisplay(message: string, action: any) {
    this.snack.open(message, action, {duration: 3000})
  }

}
