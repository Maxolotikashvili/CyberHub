import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface hddsType {
  id: number,
  hddId: number,
  manufacturer: string,
  imageUrl: string,
  name: string,
  memory: string,
  quantity: number
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class HddsService {

  hdds: hddsType[] = [
    {
      id: 63,
      hddId: 1,
      manufacturer: "Seagate",
      imageUrl: "assets/PcParts/HDDs/Skyhawk-6tb.png",
      name: "Seagate Skyhawk",
      memory: "6 TB",
      quantity: 1,
      price: 279
    },

    {
      id: 64,
      hddId: 2,
      manufacturer: "Seagate",
      imageUrl: "assets/PcParts/HDDs/barracuda-2tb.png",
      name: "Seagate Barracuda",
      memory: "2 TB",
      quantity: 1,
      price: 99
    },

    {
      id: 65,
      hddId: 3,
      manufacturer: "Seagate",
      imageUrl: "assets/PcParts/HDDs/barracuda-compute-1tb.png",
      name: "Seagate Barracuda Compute",
      memory: "1 TB",
      quantity: 1,
      price: 49
    },

    {
      id: 66,
      hddId: 4,
      manufacturer: "Western Digital",
      imageUrl: "assets/PcParts/HDDs/wd-red2tb.png",
      name: "Western Digital Red",
      memory: "2 TB",
      quantity: 1,
      price: 94
    },

    {
      id: 67,
      hddId: 5,
      manufacturer: "Western Digital",
      imageUrl: "assets/PcParts/HDDs/wd-blue1tb.png",
      name: "Western Digital Blue",
      memory: "1 TB",
      quantity: 1,
      price: 49
    },

    {
      id: 68,
      hddId: 6,
      manufacturer: "Western Digital",
      imageUrl: "assets/PcParts/HDDs/wd-black1tb.png",
      name: "Western Digital Black Gaming",
      memory: "1 TB",
      quantity: 1,
      price: 59
    }
  ];

  constructor() { }

  getHdds() {
    return of(this.hdds);
  }
}
