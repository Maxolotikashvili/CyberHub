import { Component, Input, OnInit } from '@angular/core';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  // Receive sidenav template variable 
  @Input() sidenav!: any;

  caret = faCaretRight;

  // Parts
  pcParts = [
    {
      name: "CPU",
      routerlink: "../build/cpus"
    },

    {
      name: "MOBO",
      routerlink: "../build/mobos"
    }, 

    {
      name: "GPU",
      routerlink: "../build/gpus"
    }, 

    {
      name: "RAM",
      routerlink: "../build/rams"
    }, 

    {
      name: "PSU",
      routerlink: "../build/psus"
    }, 
    {
      name: "SSD",
      routerlink: "../build/ssds"
    }, 

    {
      name: "HDD",
      routerlink: "../build/hdds"
    }, 

    {
      name: "CPU Cooler",
      routerlink: "../build/cpu-coolers"
    },

    {
      name: "CASE",
      routerlink: "../build/cases"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
