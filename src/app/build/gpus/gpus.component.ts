import { Component, OnInit } from '@angular/core';
import { GpusService, gpusType } from 'src/app/Services/buildservice/gpus.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';

@Component({
  selector: 'app-gpus',
  templateUrl: './gpus.component.html',
  styleUrls: ['./gpus.component.scss']
})
export class GpusComponent implements OnInit {
  gpus!: gpusType[];

  constructor(private gpusservice: GpusService, private cartitemservice: CartItemService) { }

  ngOnInit(): void {
    
    // Get Gpus 
    this.gpusservice.getGpus().subscribe((data: gpusType[]) => {
        this.gpus = data;
      })

  }

  sendToCart(item: gpusType) {
    this.cartitemservice.getItems(item)
  }

}
