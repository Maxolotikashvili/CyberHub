import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface cpusType {
  id: number,
  cpuId: number,
  manufacturer: string,
  imageUrl: string,
  name: string,
  quantity: number,
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class CpusService {
  cpus: cpusType[] = [
    
    {
      id: 35,
      cpuId: 1,
      manufacturer: "AMD",
      imageUrl: "/assets/PcParts/Cpus/Amd-ryzenthreadripper.png",
      name: "AMD Ryzen Theadripper 3990X",
      quantity: 1,
      price: 3499.99
    },
    
    {
      id: 36,
      cpuId: 2,
      manufacturer: "Intel",
      imageUrl: "/assets/PcParts/Cpus/i9-12900k.png",
      name: "Intel Core i9 12900K",
      quantity: 1,
      price: 1499.99
    },

    {
      id: 37,
      cpuId: 3,
      manufacturer: "Intel",
      imageUrl: "/assets/PcParts/Cpus/i9-11900k.png",
      name: "Intel Core i9 11900K",
      quantity: 1,
      price: 999.99
    },

    {
      id: 38,
      cpuId: 4,
      manufacturer: "Intel",
      imageUrl: "/assets/PcParts/Cpus/i9-11900f.png",
      name: "Intel Core i9 11900F",
      quantity: 1,
      price: 899.99
    },

    {
      id: 39,
      cpuId: 5,
      manufacturer: "Intel",
      imageUrl: "/assets/PcParts/Cpus/i9-9900k.png",
      name: "Intel Core i9 9900KF",
      quantity: 1,
      price: 809.99
    },

    {
      id: 40,
      cpuId: 6,
      manufacturer: "AMD", 
      imageUrl: "/assets/PcParts/Cpus/Amd-ryzen7.png",
      name: "AMD Ryzen 9 5900X",
      quantity: 1,
      price: 749.99
    },

    {
      id: 41,
      cpuId: 7,
      manufacturer: "Intel",
      imageUrl: "/assets/PcParts/Cpus/i7-11700k.png",
      name: "Intel Core i7 11700K",
      quantity: 1,
      price: 599.99
    },

    {
      id: 42,
      cpuId: 8,
      manufacturer: "Intel",
      imageUrl: "/assets/PcParts/Cpus/i7-10700kf.png",
      name: "Intel Core i7 10700KF",
      quantity: 1,
      price: 499.99
    },

    {
      id: 43,
      cpuId: 9,
      manufacturer: "AMD",
      imageUrl: "/assets/PcParts/Cpus/Amd-ryzen7.png",
      name: "AMD Ryzen 7 5800X",
      quantity: 1,
      price: 449.99
    },

    {
      id: 44,
      cpuId: 10,
      manufacturer: "Intel",
      imageUrl: "/assets/PcParts/Cpus/i5-11500f.png",
      name: "Intel Core i5 11500F",
      quantity: 1,
      price: 299.99
    },

    {
      id: 45,
      cpuId: 11,
      manufacturer: "Intel",
      imageUrl: "/assets/PcParts/Cpus/i5-10500kf.png",
      name: "Intel Core i5 10500KF",
      quantity: 1,
      price: 249.99
    },
  ]

  constructor() { }

  getCpus() {
    return of(this.cpus)
  }
}
