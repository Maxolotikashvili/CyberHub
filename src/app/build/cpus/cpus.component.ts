import { Component, OnInit } from '@angular/core';
import { CpusService, cpusType } from 'src/app/Services/buildservice/cpus.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';

@Component({
  selector: 'app-cpus',
  templateUrl: './cpus.component.html',
  styleUrls: ['./cpus.component.scss']
})
export class CpusComponent implements OnInit {
  cpus!: cpusType[];


  constructor(private cpusservice: CpusService, private cartItemService: CartItemService) { }

  ngOnInit(): void {

    // Get CPU-s
    this.cpusservice.getCpus().subscribe((data) => {
      this.cpus = data;
    })
  }

  sendToCart(item: cpusType) {
    this.cartItemService.getItems(item)
  }

}
