import { Component } from '@angular/core';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})
export class BuildComponent {
  partslist = [
    {
      name: "Pre - Built PC-s",
      routerName: "pctype",
      routerId: 9
    },

    {
      name: "Processor (CPU)",
      routerName: "cpus",
      routerId: 2
    },

    {
      name: "Motherboard (MOBO)",
      routerName: "mobos",
      routerId: 0
    },

    {
      name: "Video Card (GPU)",
      routerName: "gpus",
      routerId: 1
    },

    {
      name: "Memory (RAM)",
      routerName: "rams",
      routerId: 3
    },

    {
      name: "Power Supply (PSU)",
      routerName: "psus",
      routerId: 4
    },

    {
      name: "Solid State Drive (SSD)",
      routerName: "ssds",
      routerId: 5
    },

    {
      name: "Hard Disk Drive (HDD)",
      routerName: "hdds",
      routerId: 6
    },

    {
      name: "Cpu Cooler",
      routerName: "cpu-coolers",
      routerId: 7
    },

    {
      name: "Case",
      routerName: "cases",
      routerId: 8
    }
  ]

  constructor() { }

}
