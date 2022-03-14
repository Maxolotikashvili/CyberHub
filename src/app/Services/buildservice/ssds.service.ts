import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface ssdsType {
  ssdId: number,
  manufacturer: string,
  type: string,
  imageUrl: string,
  name: string,
  memory: string,
  price: string
}

@Injectable({
  providedIn: 'root'
})
export class SsdsService {
  ssds: ssdsType[] = [
    {
      ssdId: 1,
      manufacturer: "Seagate",
      type: "SSD",
      imageUrl: "/assets/PcParts/SSDs/firecuda-530headsink-2tb.png",
      name: "Seagate Firecuda 530 Heatsink",
      memory: "2 TB",
      price: "879.99$"
    },

    {
      ssdId: 2,
      manufacturer: "Seagate",
      type: "SSD",
      imageUrl: "/assets/PcParts/SSDs/firecuda-530-2tb.png",
      name: "Seagate Firecuda 530",
      memory: "2 TB",
      price: "849.99$"
    },

    {
      ssdId: 3,
      manufacturer: "Seagate",
      type: "SSD",
      imageUrl: "/assets/PcParts/SSDs/firecuda-510-500gb.png",
      name: "Seagate Firecuda 510",
      memory: "500 GB",
      price: "119.99$"
    },

    {
      ssdId: 4,
      manufacturer: "Samsung",
      type: "SSD",
      imageUrl: "/assets/PcParts/SSDs/m2-970evoplus-250gb.png",
      name: "Samsung 970 Evo Plus",
      memory: "250 GB",
      price: "79.99$"
    },

    {
      ssdId: 5,
      manufacturer: "Samsung",
      type: "SSD",
      imageUrl: "/assets/PcParts/SSDs/M2-980evo-500gb.png",
      name: "Samsung 980 Evo",
      memory: "1 TB",
      price: "299.99$"
    },

    {
      ssdId: 6,
      manufacturer: "Samsung",
      type: "SSD",
      imageUrl: "/assets/PcParts/SSDs/samsung980-ssd1tb.png",
      name: "Samsung 980 Evo",
      memory: "500 GB",
      price: "149.99$"
    },

    {
      ssdId: 7,
      manufacturer: "Samsung",
      type: "Sata",
      imageUrl: "/assets/PcParts/SSDs/sata-870evo-1tb.png",
      name: "Samsung 870 Evo",
      memory: "1 TB",
      price: "199.99$"
    },

    {
      ssdId: 8,
      manufacturer: "Western Digital",
      type: "SSD",
      imageUrl: "/assets/PcParts/SSDs/WD-black-sn750-1tb.png",
      name: "Western Digital Black SN 750",
      memory:"1 TB",
      price: "379.99$"
    },

    {
      ssdId: 9,
      manufacturer: "Western Digital",
      type: "SSD",
      imageUrl: "/assets/PcParts/SSDs/wd-bluessd-500gb.png",
      name: "Western Digital Blue",
      memory: "500 GB",
      price: "179.99$"
    },

    {
      ssdId: 10,
      manufacturer: "Western Digital",
      type: "SSD",
      imageUrl: "/assets/PcParts/SSDs/wd-greenssd-240gb.png",
      name: "Western Digital Green",
      memory: "240 GB",
      price: "89.99$"
    }
  ]

  constructor() { }

  getSsds() {
    return of(this.ssds)
  }
}
