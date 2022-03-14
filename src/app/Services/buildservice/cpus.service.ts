import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface cpusType {
  cpuId: number,
  manufacturer: string,
  imageUrl: string,
  name: string,
  price: string
}

@Injectable({
  providedIn: 'root'
})
export class CpusService {
  cpus: cpusType[] = [
    
    {
      cpuId: 1,
      manufacturer: "AMD",
      imageUrl: "/assets/PcParts/Cpus/Amd-ryzenthreadripper.png",
      name: "AMD Ryzen Theadripper 3990X",
      price: "3499.99$"
    },
    
    {
      cpuId: 2,
      manufacturer: "Intel",
      imageUrl: "/assets/PcParts/Cpus/i9-12900k.png",
      name: "Intel Core i9 12900K",
      price: "1499.99$",
    },

    {
      cpuId: 3,
      manufacturer: "Intel",
      imageUrl: "/assets/PcParts/Cpus/i9-11900k.png",
      name: "Intel Core i9 11900K",
      price: "999.99$",
    },

    {
      cpuId: 4,
      manufacturer: "Intel",
      imageUrl: "/assets/PcParts/Cpus/i9-11900f.png",
      name: "Intel Core i9 11900F",
      price: "899.99$",
    },

    {
      cpuId: 5,
      manufacturer: "Intel",
      imageUrl: "/assets/PcParts/Cpus/i9-9900k.png",
      name: "Intel Core i9 9900KF",
      price: "799.99$"
    },

    {
      cpuId: 6,
      manufacturer: "AMD", 
      imageUrl: "/assets/PcParts/Cpus/Amd-ryzen7.png",
      name: "AMD Ryzen 9 5900X",
      price: "749.99$"
    },

    {
      cpuId: 7,
      manufacturer: "Intel",
      imageUrl: "/assets/PcParts/Cpus/i7-11700k.png",
      name: "Intel Core i7 11700K",
      price: "599.99$"
    },

    {
      cpuId: 8,
      manufacturer: "Intel",
      imageUrl: "/assets/PcParts/Cpus/i7-10700kf.png",
      name: "Intel Core i7 10700KF",
      price: "499.99$"
    },

    {
      cpuId: 9,
      manufacturer: "AMD",
      imageUrl: "/assets/PcParts/Cpus/Amd-ryzen7.png",
      name: "AMD Ryzen 7 5800X",
      price: "449.99$"
    },

    {
      cpuId: 10,
      manufacturer: "Intel",
      imageUrl: "/assets/PcParts/Cpus/i5-11500f.png",
      name: "Intel Core i5 11500F",
      price: "299.99$"
    },

    {
      cpuId: 11,
      manufacturer: "Intel",
      imageUrl: "/assets/PcParts/Cpus/i5-10500kf.png",
      name: "Intel Core i5 10500KF",
      price: "249.99$"
    },
  ]

  constructor() { }

  getCpus() {
    return of(this.cpus)
  }
}
