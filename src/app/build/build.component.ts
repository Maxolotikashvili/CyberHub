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
      routerName: "pctype"
    },

    {
      name: "Processor (CPU)",
      routerName: "cpus"
    },

    {
      name: "Motherboard (MOBO)",
      routerName: "mobos"
    },

    {
      name: "Video Card (GPU)",
      routerName: "gpus"
    },

    {
      name: "Memory (RAM)",
      routerName: "rams"
    },

    {
      name: "Power Supply (PSU)",
      routerName: "psus"
    },

    {
      name: "Solid State Drive (SSD)",
      routerName: "ssds"
    },

    {
      name: "Hard Disk Drive (HDD)",
      routerName: "hdds"
    },

    {
      name: "Cpu Cooler",
      routerName: "cpu-coolers"
    },

    {
      name: "Case",
      routerName: "cases"
    }
  ]

  constructor() { }

}
