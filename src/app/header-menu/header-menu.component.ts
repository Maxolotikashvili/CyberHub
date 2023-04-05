import { Component } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent {
  burger_bar: string = 'burger-bar';
  header_block: string = 'header-block2';
  
  responsiveMode!: boolean;

  MAT_MENU_ITEMS: {name: string, routerId: number}[] = [{ name: 'Motherboard', routerId: 0 }, { name: 'Proccessor', routerId: 2 }, { name: 'Video Cards', routerId: 1 }, { name: 'Memory', routerId: 3 }, { name: 'Power Supply', routerId: 4 }, {name: 'Solid State Drive', routerId: 5}, { name: 'Hard Disk Drive', routerId: 6 }, { name: 'Cooler', routerId: 7 }, { name: 'Case', routerId: 8 }];

  //
  animateBurgerBar() {
    this.responsiveMode = !this.responsiveMode;

    if (this.responsiveMode) {
      this.burger_bar = 'responsive-burger-bar';
      this.header_block = 'responsive-header-block2'
    } else {
      this.burger_bar = 'burger-bar';
      this.header_block = 'header-block2';
    }
  }
}