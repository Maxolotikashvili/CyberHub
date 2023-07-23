import { Component } from '@angular/core';

@Component({
  selector: 'app-assembly',
  templateUrl: './assembly.component.html',
  styleUrls: ['./assembly.component.scss']
})
export class AssemblyComponent {
  CATEGORIES_LIST: { name: string, routerId: number }[] = [
    { name: 'Completed Builds', routerId: 9 }, 
    { name: 'Proccessor (CPU)', routerId: 2 }, 
    { name: 'Motherboard (MOBO)', routerId: 0 }, 
    { name: 'Video Card (GPU)', routerId: 1 }, 
    { name: 'Memory (RAM)', routerId: 3 }, 
    { name: 'Power Supply (PSU)', routerId: 4 }, 
    { name: 'Solid State Drive (SSD)', routerId: 5 }, 
    { name: 'Hard Disk Drive (HDD)', routerId: 6 }, 
    { name: 'Cpu Cooler', routerId: 7 }, 
    { name: 'Case', routerId: 8 }
  ];

  constructor() { }
}
