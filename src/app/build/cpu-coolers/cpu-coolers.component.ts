import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { coolersType, CpuCoolersService } from 'src/app/Services/buildservice/cpu-coolers.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';

@Component({
  selector: 'app-cpu-coolers',
  templateUrl: './cpu-coolers.component.html',
  styleUrls: ['./cpu-coolers.component.scss']
})
export class CpuCoolersComponent implements OnInit {
  coolers!: coolersType[];

  constructor(
    private coolersservice: CpuCoolersService, 
    private cartitemservice: CartItemService,
    private snack: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.coolersservice.getCoolers().subscribe((data) => {
      this.coolers = data;
    })
  }

  sendToCart(item: coolersType) {
    this.cartitemservice.getItems(item)
  }

  snackDisplay(message: string, action: any) {
    this.snack.open(message, action, {duration: 3000})
  }

}
