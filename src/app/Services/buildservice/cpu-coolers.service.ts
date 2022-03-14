import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface coolersType {
  coolerId: number,
  manufacturer: string,
  imageUrl: string,
  name: string,
  price: string
}

@Injectable({
  providedIn: 'root'
})
export class CpuCoolersService {

  coolers: coolersType[] = [
    {
      coolerId: 1,
      imageUrl: "/assets/PcParts/Cpu-Coolers/corsair-h150cappelix.png",
      manufacturer: "Corsair",
      name: "Corsair H150i Elite Cappelix",
      price: "279.99$"
    },

    {
      coolerId: 2,
      imageUrl: "/assets/PcParts/Cpu-Coolers/h115i.png",
      manufacturer: "Corsair",
      name: "Corsair H115i Pro",
      price: "199.99$"
    },

    {
      coolerId: 3,
      imageUrl: "/assets/PcParts/Cpu-Coolers/h100i.png",
      manufacturer: "Corsair",
      name: "Corsair H100i",
      price: "139.99$"
    },

    {
      coolerId: 4,
      imageUrl: "/assets/PcParts/Cpu-Coolers/kraken-z73.png",
      manufacturer: "NZXT",
      name: "NZXT Kraken Z73",
      price: "369.99$"
    },

    {
      coolerId: 5,
      imageUrl: "/assets/NZXT/kraken-z73.png",
      manufacturer: "NZXT",
      name: "NZXT Kraken Z73 White",
      price: "369.99$"
    },

    {
      coolerId: 6,
      imageUrl: "/assets/PcParts/Cpu-Coolers/kraken-z63.png",
      manufacturer: "NZXT",
      name: "NZXT Kraken Z63",
      price: "249.99$"
    },

    {
      coolerId: 7,
      imageUrl: "/assets/NZXT/kraken-x73.png",
      manufacturer: "NZXT",
      name: "NZXT Kraken X73 White",
      price: "189.99$"
    },

    {
      coolerId: 8,
      imageUrl: "/assets/PcParts/Cpu-Coolers/asus-l360.png",
      manufacturer: "Asus",
      name: "Asus Rog LC360",
      price: "359.99$"
    },

    { coolerId: 9,
      imageUrl: "/assets/PcParts/Cpu-Coolers/rog-lc240.png",
      manufacturer: "Asus",
      name: "Asus Rog LC240",
      price: "279.99$"
    },

    {
      coolerId: 10,
      imageUrl: "/assets/PcParts/Cpu-Coolers/Deepcool-gammax-l360.png",
      manufacturer: "DeepCool",
      name: "DeepCool Gammaxx L360",
      price: "149.99$"
    },

    {
      coolerId: 11,
      imageUrl: "/assets/PcParts/Cpu-Coolers/Gammax-l240.png",
      manufacturer: "DeepCool",
      name: "DeepCool Gammaxx L240",
      price: "109.99$"
    },

    {
      coolerId: 12,
      imageUrl: "/assets/PcParts/Cpu-Coolers/gammaxx-l240argb.png",
      manufacturer: "DeepCool",
      name: "DeepCool Gammaxx L240 ARGB",
      price: "109.99$"
    },

    {
      coolerId: 13,
      imageUrl: "/assets/PcParts/Cpu-Coolers/Thermaltake-th360.png",
      manufacturer: "Thermaltake",
      name: "Thermaltake TH360",
      price: "219.99$"
    },

    {
      coolerId: 14,
      imageUrl: "/assets/PcParts/Cpu-Coolers/Thermaltake-th360argb.png",
      manufacturer: "Thermaltake",
      name: "Thermaltake TH360 White",
      price: "219.99$"
    },

    {
      coolerId: 15,
      imageUrl: "/assets/PcParts/Cpu-Coolers/Thermaltake-th240.png",
      manufacturer: "Thermaltake",
      name: "Thermaltake TH240 White",
      price: "169.99$"
    },

    {
      coolerId: 16,
      imageUrl: "/assets/PcParts/Cpu-Coolers/thermaltake-pureplus.png",
      manufacturer: "Thermaltake",
      name: "Thermaltake Pure Plus",
      price: "99.99$"
    },

    {
      coolerId: 16,
      imageUrl: "/assets/PcParts/Cpu-Coolers/coolermaster-masterfan-mf120.png",
      manufacturer: "Cooler Master",
      name: "Cooler Master MF120",
      price: "89.99$"
    },

    {
      coolerId: 17,
      imageUrl: "/assets/PcParts/Cpu-Coolers/zalman-CNPS20x.png",
      manufacturer: "Zalman",
      name: "Zalman CNPS20X",
      price: "79.99$"
    },

    {
      coolerId: 18,
      imageUrl: "/assets/PcParts/Cpu-Coolers/ux200.png",
      manufacturer: "Thermaltake",
      name: "Thermaltake UX200 ARGB",
      price: "69.99$"
    },

    {
      coolerId: 19,
      imageUrl: "/assets/PcParts/Cpu-Coolers/gammax-gte.png",
      manufacturer: "DeepCool",
      name: "DeepCool Gammaxx GTE",
      price: "69.99$"
    },
    
  ];

  constructor() { }

  getCoolers() {
    return of(this.coolers)
  }

}
