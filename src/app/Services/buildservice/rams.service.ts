import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface ramsType {
  ramId: number,
  manufacturer: string,
  imageUrl: string,
  name: string,
  memory: string,
  price: string
}

@Injectable({
  providedIn: 'root'
})
export class RamsService {
  rams: ramsType[] = [
    {
      ramId: 1,
      manufacturer: "Gskill",
      imageUrl: "/assets/PcParts/Rams/Gskill-tridentz5-6000-32gb.png",
      name: "G Skill Trident Z5",
      memory: "32 GB",
      price: "899.99$"
    },

    {
      ramId: 2,
      manufacturer: "Gskill",
      imageUrl: "/assets/PcParts/Rams/Gskill-tridentzroyal-64gb.png",
      name: "G Skill Trident Z Royal Elite",
      memory: "64 GB",
      price: "849.99$"
    },

    {
      ramId: 3,
      manufacturer: "Gskill",
      imageUrl: "/assets/PcParts/Rams/Gskill-tridentz-neo-32gb.png",
      name: "G Skill Trident Z Neo",
      memory: "32 GB",
      price: "499.99$"
    },

    {
      ramId: 4,
      manufacturer: "Gskill",
      imageUrl: "/assets/PcParts/Rams/Gskill-tridentzrgb-32gb.png",
      name: "G Skill Trident Z RGB",
      memory: "32 GB",
      price: "419.99$"
    },

    {
      ramId: 5,
      manufacturer: "Gskill",
      imageUrl: "/assets/PcParts/Rams/Gskill-ripjaws-16gb.png",
      name: "G Skill Ripjaws",
      memory: "16 GB",
      price: "239.99$"
    },

    {
      ramId: 6,
      manufacturer: "Corsair",
      imageUrl: "/assets/PcParts/Rams/Corsair-dominatorplatinum-32gb.png",
      name: "Corsair Dominator Platinum",
      memory: "32 GB",
      price: "499.99$"
    },

    {
      ramId: 7,
      manufacturer: "Corsair",
      imageUrl: "/assets/PcParts/Rams/Corsair-dominatorplatinumwhite-64gb.png",
      name: "Corsair Dominator White",
      memory: "64 GB",
      price: "869.99$"
    },

    {
      ramId: 8,
      manufacturer: "Corsair",
      imageUrl: "/assets/PcParts/Rams/Vengeance-rgbpro-32gb.png",
      name: "Corsair Vengeance RGB Pro",
      memory: "32 GB",
      price: "399.99$"
    },

    {
      ramId: 9,
      manufacturer: "Corsair",
      imageUrl: "/assets/PcParts/Rams/vengeance-lpx-16gb.png",
      name: "Corsair Vengeance LPX",
      memory: "16 GB",
      price: "179.99$"
    },

    {
      ramId: 10,
      manufacturer: "Corsair",
      imageUrl: "/assets/PcParts/Rams/vengeance-sl-16gb.png",
      name: "Corsair Vengeance RGB SL",
      memory: "16 GB",
      price: "169.99$"
    },

    {
      ramId: 11,
      manufacturer: "Teamgroup",
      imageUrl: "/assets/PcParts/Rams/Teamgroup-tforce-16gb.png",
      name: "Teamgroup T - Force",
      memory: "16 GB",
      price: "159.99$"
    },

    {
      ramId: 12,
      manufacturer: "Crucial",
      imageUrl: "/assets/PcParts/Rams/Crucial-balistix-16gb.png",
      name: "Crucial Balistix White",
      memory: "16 GB",
      price: "149.99$"
    }
  ]
  
  constructor() { }

  getRams() {
    return of(this.rams)
  }
}
