import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface hddsType {
  hddId: number,
  manufacturer: string,
  imageUrl: string,
  name: string,
  memory: string,
  price: string
}

@Injectable({
  providedIn: 'root'
})
export class HddsService {

  hdds: hddsType[] = [
    {
      hddId: 1,
      manufacturer: "Seagate",
      imageUrl: "/assets/PcParts/HDDs/Skyhawk-6tb.png",
      name: "Seagate Skyhawk",
      memory: "6 TB",
      price: "279.99$"
    },

    {
      hddId: 2,
      manufacturer: "Seagate",
      imageUrl: "/assets/PcParts/HDDs/barracuda-2tb.png",
      name: "Seagate Barracuda",
      memory: "2 TB",
      price: "99.99$"
    },

    {
      hddId: 3,
      manufacturer: "Seagate",
      imageUrl: "/assets/PcParts/HDDs/barracuda-compute-1tb.png",
      name: "Seagate Barracuda Compute",
      memory: "1 TB",
      price: "49.99$"
    },

    {
      hddId: 4,
      manufacturer: "Western Digital",
      imageUrl: "/assets/PcParts/HDDs/wd-red2tb.png",
      name: "Western Digital Red",
      memory: "2 TB",
      price: "94.99$"
    },

    {
      hddId: 5,
      manufacturer: "Western Digital",
      imageUrl: "/assets/PcParts/HDDs/wd-blue1tb.png",
      name: "Western Digital Blue",
      memory: "1 TB",
      price: "49.99$"
    },

    {
      hddId: 6,
      manufacturer: "Western Digital",
      imageUrl: "/assets/PcParts/HDDs/wd-black1tb.png",
      name: "Western Digital Black Gaming",
      memory: "1 TB",
      price: "59.99$"
    }
  ];

  constructor() { }

  getHdds() {
    return of(this.hdds);
  }
}
