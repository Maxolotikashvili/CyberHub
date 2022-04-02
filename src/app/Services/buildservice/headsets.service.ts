import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface headsetsType {
  id: number,
  headsetId: number,
  manufacturer: string,
  imageUrl: string,
  name: string,
  quantity: number,
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class HeadsetsService {
  headsets: headsetsType[] = [
    {
      id: 69,
      headsetId: 1,
      manufacturer: "Steelseries",
      imageUrl: "/assets/PcParts/Headsets/steelseriesarctispro.png",
      name: "Steelseries Arctis Pro",
      quantity: 1,
      price: 559
    },

    {
      id: 70,
      headsetId: 2,
      manufacturer: "Steelseries",
      imageUrl: "/assets/PcParts/Headsets/arctis9.png",
      name: "Steelseries Arctis 9",
      quantity: 1,
      price: 479
    },

    {
      id: 71,
      headsetId: 3,
      manufacturer: "Steelseries",
      imageUrl: "/assets/PcParts/Headsets/steelseriesarctis7.png",
      name: "Steelseries Arctis 7",
      quantity: 1,
      price: 429
    },

    {
      id: 72,
      headsetId: 4,
      manufacturer: "Razer",
      imageUrl: "/assets/PcParts/Headsets/razer-nari.png",
      name: "Razer Nari",
      quantity: 1,
      price: 389
    },

    {
      id: 73,
      headsetId: 5,
      manufacturer: "Asus",
      imageUrl: "/assets/PcParts/Headsets/rog-deltargb.png",
      name: "Asus Rog Delta RGB",
      quantity: 1,
      price: 359
    },

    {
      id: 74,
      headsetId: 6,
      manufacturer: "HyperX",
      imageUrl: "/assets/PcParts/Headsets/Cloud-orbits.png",
      name: "HyperX Cloud Orbit S",
      quantity: 1,
      price: 309
    },

    {
      id: 75,
      headsetId: 7,
      manufacturer: "HyperX",
      imageUrl: "/assets/PcParts/Headsets/cloud2-wired.png",
      name: "HyperX Cloud 2",
      quantity: 1,
      price: 179
    },

    {
      id: 76,
      headsetId: 8,
      manufacturer: "HyperX",
      imageUrl: "/assets/PcParts/Headsets/cloudii-71.png",
      name: "HyperX Cloud Orbit 71",
      quantity: 1,
      price: 139
    },

  ];

  constructor() { }

  getHeadsets() {
    return of(this.headsets);
  }
}
