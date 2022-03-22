import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface psusType {
  psuId: number,
  manufacturer: string,
  imageUrl: string,
  name: string,
  power: string,
  quantity: number,
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class PsusService {

  psus: psusType[] = [

    {
      psuId: 1,
      manufacturer: "Be Quet!",
      imageUrl: "/assets/PcParts/Psus/bequet-darkpowerpro12-1500w.png",
      name: "Be Quet! Dark Power Pro 12",
      power: "1500 W",
      quantity: 1,
      price: 599.99
    },

    {
      psuId: 2,
      manufacturer: "Be Quet!",
      imageUrl: "/assets/PcParts/Psus/bequet-darkpowerpro12-1500w.png",
      name: "Be Quet! Dark Power Pro 12",
      power: "1000 W",
      quantity: 1,
      price: 399.99
    },

    {
      psuId: 3,
      manufacturer: "Evga",
      imageUrl: "/assets/PcParts/Psus/Supernova-1000w.png",
      name: "Evga Supernova",
      power: "1000 W",
      quantity: 1,
      price: 329.99
    },

    {
      psuId: 4,
      manufacturer: "Evga",
      imageUrl: "/assets/PcParts/Psus/evga-g61000w.png",
      name: "Evga G6",
      power: "1000 W",
      quantity: 1,
      price: 279.99
    },

    {
      psuId: 5,
      manufacturer: "Evga",
      imageUrl: "/assets/PcParts/Psus/evga-600w.png",
      name: "Evga Standart",
      power: "600 W",
      quantity: 1,
      price: 149.99
    },

    {
      psuId: 6,
      manufacturer: "Thermaltake",
      imageUrl: "/assets/PcParts/Psus/thermaltake-toughpowere1200w.png",
      name: "Thermaltake Toughpower PF1",
      power: "1200 W",
      quantity: 1,
      price: 289.99
    },

    {
      psuId: 7,
      manufacturer: "Thermaltake",
      imageUrl: "/assets/PcParts/Psus/thermaltaketoughpower-850w.png",
      name: "Thermaltake Toughpower GF",
      power: "850 W",
      quantity: 1,
      price: 209.99
    },

    {
      psuId: 8,
      manufacturer: "Thermaltake",
      imageUrl: "/assets/PcParts/Psus/thermaltake-toughpower-500w.png",
      name: "Thermaltake Toughpower",
      power: "500 W",
      quantity: 1,
      price: 159.99
    },

    {
      psuId: 9,
      manufacturer: "DeepCool",
      imageUrl: "/assets/PcParts/Psus/deepcool-850m.png",
      name: "DeepCool M-V2L",
      power: "850 W",
      quantity: 1,
      price: 199.99
    },

  ];

  constructor() { }

  getPsus() {
    return of(this.psus);
  }
}
