import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faCartShopping, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { CartItemService } from './Services/Cart/cart-item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Cyberhub';

  items!: any[];

  facebook = faFacebook;
  twitter = faTwitter;
  youtube = faYoutube;
  bar = faBars;
  cart = faCartShopping;

  copyright = faCopyright;

  constructor(private cartitemservice: CartItemService) {}

  ngOnInit(): void {
    this.cartitemservice.sendItems().subscribe((data) => {
      this.items = data;
    })
  }
}
