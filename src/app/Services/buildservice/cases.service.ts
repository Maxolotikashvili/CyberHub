import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface casesType {
  caseId: number,
  manufacturer: string,
  imageUrl: string,
  name: string,
  quantity: number,
  price: number
};

@Injectable({
  providedIn: 'root'
})
export class CasesService {
  cases: casesType[] = [
    {
      caseId: 1,
      manufacturer: "Thermaltake",
      imageUrl: "/assets/PcParts/Cases/Thermaltake-ah-t600.png",
      name: "Thermaltake AH-T 600",
      quantity: 1,
      price: 469.99
    },

    {
      caseId: 2,
      manufacturer: "Thermaltake",
      imageUrl: "/assets/PcParts/Cases/Thermaltake-ah-t600white.png",
      name: "Thermaltake AH-T 600 White",
      quantity: 1,
      price: 469.99
    },
    
    {
      caseId: 3,
      manufacturer: "Thermaltake",
      imageUrl: "/assets/PcParts/Cases/Thermaltake-view71-rgbplus.png",
      name: "Thermaltake View 71 RGB Plus",
      quantity: 1,
      price: 379.99
    },
    
    {
      caseId: 4,
      manufacturer: "Thermaltake",
      imageUrl: "/assets/PcParts/Cases/Thermaltake-view71.png",
      name: "Thermaltake View 71",
      quantity: 1,
      price: 359.99
    },

    {
      caseId: 5,
      manufacturer: "Thermaltake",
      imageUrl: "/assets/PcParts/Cases/thermaltake-divier-mid.png",
      name: "Thermaltake Divider",
      quantity: 1,
      price: 249.99
    },
    
    {
      caseId: 6,
      manufacturer: "Thermaltake",
      imageUrl: "/assets/PcParts/Cases/thermaltake-divider-midwhite.png",
      name: "Thermaltake Divider White",
      quantity: 1,
      price: 249.99
    },
    
    {
      caseId: 7,
      manufacturer: "Thermaltake",
      imageUrl: "/assets/PcParts/Cases/thermaltake-commander-midtower.png",
      name: "Thermaltake Commander",
      quantity: 1,
      price: 219.99
    },

    {
      caseId: 8,
      manufacturer: "Anidees",
      imageUrl: "/assets/PcParts/Cases/Anidees-Ai-Crystal-XL-full.png",
      name: "Anidees Crystal XL",
      quantity: 1,
      price: 259.99
    },

    {
      caseId: 9,
      manufacturer: "Corsair",
      imageUrl: "/assets/PcParts/Cases/icue5000x.png",
      name: "Corsair iCue 5000X",
      quantity: 1,
      price: 199.99
    },

    {
      caseId: 10,
      manufacturer: "Corsair",
      imageUrl: "/assets/PcParts/Cases/icue4000x.jpg",
      name: "Corsair iCue 4000X",
      quantity: 1,
      price: 179.99
    },
    
    {
      caseId: 11,
      manufacturer: "Gamemax",
      imageUrl: "/assets/PcParts/Cases/Gamemax-atx-rgb.png",
      name: "Gamemax Diamond Black",
      quantity: 1,
      price: 169.99
    },
    
    {
      caseId: 12,
      manufacturer: "Genesis",
      imageUrl: "/assets/PcParts/Cases/Genesis-midtower.png",
      name: "Genesis IRID 515 Black",
      quantity: 1,
      price: 159.99
    },

    {
      caseId: 13,
      manufacturer: "Asus",
      imageUrl: "/assets/PcParts/Cases/tufgaming-gt501mid.png",
      name: "Asus Tuf Gaming GT501",
      quantity: 1,
      price: 149.99
    },
    
    {
      caseId: 14,
      manufacturer: "Asus",
      imageUrl: "/assets/PcParts/Cases/tufgaming-gt501midwhite.png",
      name: "Asus Tuf Gaming GT501 White",
      quantity: 1,
      price: 149.99
    },
    
  ];

  constructor() { }

  getCases() {
    return of(this.cases);
  }
}
