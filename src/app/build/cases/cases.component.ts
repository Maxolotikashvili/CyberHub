import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { CasesService, casesType } from 'src/app/Services/buildservice/cases.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {
  cases!: casesType[];

  // Fontawesome
  eye = faEye;
  heart = faHeart;

  // Spinner
  spinnerboxshow = "spinnerboxshow";
  blur = "blur";

  constructor(
    private casesservice: CasesService,
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

    this.casesservice.getCases().subscribe((data) => {
      this.cases = data;
    })
  }

  sendItem(item: casesType) {
    this.cartitemservice.getItems(item)
  }

  snackDisplay(message: string, action: any) {
    this.snack.open(message, action, {duration: 3000})
  }

}
