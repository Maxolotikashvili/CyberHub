import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GpusService, gpusType } from 'src/app/Services/buildservice/gpus.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';

@Component({
  selector: 'app-gpus',
  templateUrl: './gpus.component.html',
  styleUrls: ['./gpus.component.scss']
})
export class GpusComponent implements OnInit {
  gpus!: gpusType[];

  constructor(
    private gpusservice: GpusService,
    private cartitemservice: CartItemService,
    private snack: MatSnackBar
    ) { }

  ngOnInit(): void {
    
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
