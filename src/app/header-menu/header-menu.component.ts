import { Component } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent {
  MAT_MENU_ITEMS = [{ name: 'Motherboard', routerLink: '/build/mobos' }, { name: 'Proccessor', routerLink: '/build/cpus' }, { name: 'Video Cards', routerLink: '/build/gpus' }, { name: 'Memory', routerLink: '/build/rams' }, { name: 'Solid State Drive', routerLink: '/build/ssds' }, { name: 'Hard Disk Drive', routerLink: '/build/hdds' }, { name: 'Cooler', routerLink: '/build/cpu-coolers' }, { name: 'Case', routerLink: '/build/cases' }];
}