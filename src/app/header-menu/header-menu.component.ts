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

  MAT_MENU_ITEMS = [{ name: 'Motherboard', routerLink: '/build/mobos' }, { name: 'Proccessor', routerLink: '/build/cpus' }, { name: 'Video Cards', routerLink: '/build/gpus' }, { name: 'Memory', routerLink: '/build/rams' }, { name: 'Solid State Drive', routerLink: '/build/ssds' }, { name: 'Hard Disk Drive', routerLink: '/build/hdds' }, { name: 'Cooler', routerLink: '/build/cpu-coolers' }, { name: 'Case', routerLink: '/build/cases' }];

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