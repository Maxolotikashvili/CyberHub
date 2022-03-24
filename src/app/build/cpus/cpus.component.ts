import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { CpusService, cpusType } from 'src/app/Services/buildservice/cpus.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';

@Component({
  selector: 'app-cpus',
  templateUrl: './cpus.component.html',
  styleUrls: ['./cpus.component.scss']
})
export class CpusComponent implements OnInit {
  cpus!: cpusType[];

  // Fontawesome
  eye = faEye;
  heart = faHeart;

  // Spinner
  spinnerboxshow = "spinnerboxshow";
  blur = "blur"; 

  constructor(
    private cpusservice: CpusService, 
    private cartItemService: CartItemService,
    private snack: MatSnackBar
    ) { }

  ngOnInit(): void {
    
     // Spinner Timeout
     this.spinnerboxshow = "spinnerboxshow";

     setTimeout(() => {
       this.spinnerboxshow = "spinnerboxhide";
       this.blur = "";
     }, 1500);

    // Get CPU-s
    this.cpusservice.getCpus().subscribe((data) => {
      this.cpus = data;
    })
  }

  sendToCart(item: cpusType) {
    this.cartItemService.getItems(item)
  }

  snackDisplay(message: string, action: any) {
    this.snack.open(message, action, {duration: 3000})
  }

}
