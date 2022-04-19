import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface coolersType {
  id: number,
  coolerId: number,
  manufacturer: string,
  imageUrl: string,
  name: string,
  type: string,
  quantity: number,
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class CpuCoolersService {

  coolers: coolersType[] = [
    {
      id: 15,
      coolerId: 1,
      imageUrl: "/assets/PcParts/Cpu-Coolers/corsair-h150cappelix.png",
      manufacturer: "Corsair",
      name: "Corsair H150i Elite Cappelix",
      type: "Liquid",
      quantity: 1,
      price: 279
    },

    {
      id: 16,
      coolerId: 2,
      imageUrl: "/assets/PcParts/Cpu-Coolers/h115i.png",
      manufacturer: "Corsair",
      name: "Corsair H115i Pro",
      type: "Liquid",
      quantity: 1,
      price: 199
    },

    {
      id: 17,
      coolerId: 3,
      imageUrl: "/assets/PcParts/Cpu-Coolers/h100i.png",
      manufacturer: "Corsair",
      name: "Corsair H100i",
      type: "Liquid",
      quantity: 1,
      price: 139
    },

    {
      id: 18,
      coolerId: 4,
      imageUrl: "/assets/PcParts/Cpu-Coolers/kraken-z73.png",
      manufacturer: "NZXT",
      name: "NZXT Kraken Z73",
      type: "Liquid",
      quantity: 1,
      price: 369
    },

    {
      id: 19,
      coolerId: 5,
      imageUrl: "/assets/NZXT/kraken-z73.png",
      manufacturer: "NZXT",
      name: "NZXT Kraken Z73 White",
      type: "Liquid",
      quantity: 1,
      price: 369
    },

    {
      id: 20,
      coolerId: 6,
      imageUrl: "/assets/PcParts/Cpu-Coolers/kraken-z63.png",
      manufacturer: "NZXT",
      name: "NZXT Kraken Z63",
      type: "Liquid",
      quantity: 1,
      price: 249
    },

    {
      id: 21,
      coolerId: 7,
      imageUrl: "/assets/NZXT/kraken-x73.png",
      manufacturer: "NZXT",
      name: "NZXT Kraken X73 White",
      type: "Liquid",
      quantity: 1,
      price: 189
    },

    {
      id: 22,
      coolerId: 8,
      imageUrl: "/assets/PcParts/Cpu-Coolers/asus-l360.png",
      manufacturer: "Asus",
      name: "Asus Rog LC360",
      type: "Liquid",
      quantity: 1,
      price: 359
    },

    {
      id: 23,
      coolerId: 9,
      imageUrl: "/assets/PcParts/Cpu-Coolers/rog-lc240.png",
      manufacturer: "Asus",
      name: "Asus Rog LC240",
      type: "Liquid",
      quantity: 1,
      price: 279
    },

    {
      id: 24,
      coolerId: 10,
      imageUrl: "/assets/PcParts/Cpu-Coolers/Deepcool-gammax-l360.png",
      manufacturer: "DeepCool",
      name: "DeepCool Gammaxx L360",
      type: "Liquid",
      quantity: 1,
      price: 149
    },

    {
      id: 25,
      coolerId: 11,
      imageUrl: "/assets/PcParts/Cpu-Coolers/Gammax-l240.png",
      manufacturer: "DeepCool",
      name: "DeepCool Gammaxx L240",
      type: "Liquid",
      quantity: 1,
      price: 109
    },

    {
      id: 26, 
      coolerId: 12,
      imageUrl: "/assets/PcParts/Cpu-Coolers/gammaxx-l240argb.png",
      manufacturer: "DeepCool",
      name: "DeepCool Gammaxx L240 ARGB",
      type: "Liquid",
      quantity: 1,
      price: 109
    },

    {
      id: 27,
      coolerId: 13,
      imageUrl: "/assets/PcParts/Cpu-Coolers/Thermaltake-th360.png",
      manufacturer: "Thermaltake",
      name: "Thermaltake TH360",
      type: "Liquid",
      quantity: 1,
      price: 219
    },

    {
      id: 28,
      coolerId: 14,
      imageUrl: "/assets/PcParts/Cpu-Coolers/Thermaltake-th360argb.png",
      manufacturer: "Thermaltake",
      name: "Thermaltake TH360 White",
      type: "Liquid",
      quantity: 1,
      price: 219
    },

    {
      id: 29,
      coolerId: 15,
      imageUrl: "/assets/PcParts/Cpu-Coolers/Thermaltake-th240.png",
      manufacturer: "Thermaltake",
      name: "Thermaltake TH240 White",
      type: "Liquid",
      quantity: 1,
      price: 169
    },

    {
      id: 30,
      coolerId: 16,
      imageUrl: "/assets/PcParts/Cpu-Coolers/thermaltake-pureplus.png",
      manufacturer: "Thermaltake",
      name: "Thermaltake Pure Plus",
      type: "Wind",
      quantity: 1,
      price: 99
    },

    {
      id: 31,
      coolerId: 16,
      imageUrl: "/assets/PcParts/Cpu-Coolers/coolermaster-masterfan-mf120.png",
      manufacturer: "Cooler Master",
      name: "Cooler Master MF120",
      type: "Wind",
      quantity: 1,
      price: 89
    },

    {
      id: 32,
      coolerId: 17,
      imageUrl: "/assets/PcParts/Cpu-Coolers/zalman-CNPS20x.png",
      manufacturer: "Zalman",
      name: "Zalman CNPS20X",
      type: "Wind",
      quantity: 1,
      price: 79
    },

    {
      id: 33,
      coolerId: 18,
      imageUrl: "/assets/PcParts/Cpu-Coolers/ux200.png",
      manufacturer: "Thermaltake",
      name: "Thermaltake UX200 ARGB",
      type: "Wind",
      quantity: 1,
      price: 69
    },

    {
      id: 34,
      coolerId: 19,
      imageUrl: "/assets/PcParts/Cpu-Coolers/gammax-gte.png",
      manufacturer: "DeepCool",
      name: "DeepCool Gammaxx GTE",
      type: "Wind",
      quantity: 1,
      price: 69
    },

  ];

  constructor() { }

  getCoolers() {
    return of(this.coolers)
  }

}
