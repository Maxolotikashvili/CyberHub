import { Injectable } from '@angular/core';

export interface pcsType {
  id: number,
  type: string,
  mobo: string,
  gpu: string,
  cpu: string,
  ram: string,
  memory: string,
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class PcsService {

  intelpcs: pcsType[] = [
    {
      id: 122,
      type: "Intel",
      mobo: "MSI MEG Godlike",
      gpu: "RTX 3090 Strix",
      cpu: "i9 12900K",
      ram: "32GB DDR5 6000, Corsair Dominator",
      memory: "6 TB HDD, 4TB SSD - Seagate Firecuda",
      price: 13000
    },

    {
      id: 123,
      type: "Intel",
      mobo: "Z590 - E Gaming",
      gpu: "RTX 3080 Ti Aorus",
      cpu: "i9 10900KF",
      ram: "32GB DDR4, 4000 G-Skill Trident",
      memory: "4TB HDD, 2TB SSD - WD SN550",
      price: 9000
    },

    {
      id: 124,
      type: "Intel",
      mobo: "Z590 - H Gaming",
      gpu: "RTX 3080 FE",
      cpu: "i7 11700K",
      ram: "32GB DDR4 3600 Corsair Vengeance",
      memory: "2TB HDD, 1TB SSD - 970 Evo Plus",
      price: 6000
    },

    {
      id: 125,
      type: "Intel",
      mobo: "Z490 - A Gaming",
      gpu: "RTX 3070 Ti Vision",
      cpu: "i5 11500KF",
      ram: "16GB DDR4 3200 Vengeance LPX",
      memory: "2TB HDD, 1TB SSD - 970 Evo",
      price: 4000
    },

    {
      id: 126,
      type: "Intel",
      mobo: "Z390 - A Gaming",
      gpu: "RTX 3060 MSI",
      cpu: "i5 10500F",
      ram: "16GB DDR4 3200 G-Skill Ripjaws",
      memory: "2TB HDD, 500GB SSD - 870 Evo",
      price: 3000
    }
  ]

  amdpcs: pcsType[] = [
    {
      id: 127,
      type: "AMD",
      mobo: "MSI MEG Ace",
      gpu: "Radeon 6900XT",
      cpu: "Ryzen Theadripper 3990X",
      ram: "32GB DDR5 6000 G-Skill Royal",
      memory: "8TB HDD, 4TB SSD - Seagate Firecuda 530",
      price: 15000
    }
  ]

  constructor() { }
}
