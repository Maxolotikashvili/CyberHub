import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface headsetsType {
  headsetId: number,
  manufacturer: string,
  imageUrl: string,
  name: string,
  price: string
}

@Injectable({
  providedIn: 'root'
})
export class HeadsetsService {
  headsets: headsetsType[] = [
    {
      headsetId: 1,
      manufacturer: "Steelseries",
      imageUrl: "/assets/PcParts/Headsets/steelseriesarctispro.png",
      name: "Steelseries Arctis Pro",
      price: "559.99$"
    },

    {
      headsetId: 2,
      manufacturer: "Steelseries",
      imageUrl: "/assets/PcParts/Headsets/arctis9.png",
      name: "Steelseries Arctis 9",
      price: "479.99$"
    },

    {
      headsetId: 3,
      manufacturer: "Steelseries",
      imageUrl: "/assets/PcParts/Headsets/steelseriesarctis7.png",
      name: "Steelseries Arctis 7",
      price: "429.99$"
    },

    {
      headsetId: 4,
      manufacturer: "Razer",
      imageUrl: "/assets/PcParts/Headsets/razer-nari.png",
      name: "Razer Nari",
      price: "389.99$"
    },

    {
      headsetId: 5,
      manufacturer: "Asus",
      imageUrl: "/assets/PcParts/Headsets/rog-deltargb.png",
      name: "Asus Rog Delta RGB",
      price: "359.99$"
    },

    {
      headsetId: 6,
      manufacturer: "HyperX",
      imageUrl: "/assets/PcParts/Headsets/Cloud-orbits.png",
      name: "HyperX Cloud Orbit S",
      price: "309.99$"
    },

    {
      headsetId: 7,
      manufacturer: "HyperX",
      imageUrl: "/assets/PcParts/Headsets/cloud2-wired.png",
      name: "HyperX Cloud 2",
      price: "179.99$"
    },

    {
      headsetId: 8,
      manufacturer: "HyperX",
      imageUrl: "/assets/PcParts/Headsets/cloudii-71.png",
      name: "HyperX Cloud Orbit 71",
      price: "139.99$"
    },

  ];

  constructor() { }

  getHeadsets() {
    return of(this.headsets);
  }
}
