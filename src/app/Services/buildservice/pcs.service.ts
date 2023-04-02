import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { PcsType } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class PcsService {

  intelpcs: PcsType[] = [
    {
      id: 122,
      type: "Intel",
      imageUrl: "assets/PcParts/PCs/3090-pc.png",
      mobo: "MSI MEG Godlike",
      gpu: "RTX 3090 Strix",
      cpu: "i9 12900K",
      ram: "32GB DDR5 6000, Corsair Dominator",
      memory: "6 TB HDD, 4TB SSD - M2",
      cooling: "Water Cooling",
      price: 13000
    },

    {
      id: 123,
      type: "Intel",
      imageUrl: "assets/PcParts/PCs/3080ti-pc.png",
      mobo: "Z590 - E Gaming",
      gpu: "RTX 3080 Ti Aorus",
      cpu: "i9 10900KF",
      ram: "32GB DDR4, 4000 G-Skill Trident",
      memory: "4TB HDD, 2TB SSD - M2",
      cooling: "Water Cooling",
      price: 9000
    },

    {
      id: 124,
      type: "Intel",
      imageUrl: "assets/PcParts/PCs/3080-pc.png",
      mobo: "Z590 - H Gaming",
      gpu: "RTX 3080 FE",
      cpu: "i7 11700K",
      ram: "32GB DDR4 3600 Corsair Vengeance",
      memory: "2TB HDD, 1TB SSD - M2",
      cooling: "Water Cooling",
      price: 6000
    },

    {
      id: 125,
      type: "Intel",
      imageUrl: "assets/PcParts/PCs/3070ti-pc.png",
      mobo: "Z490 - A Gaming",
      gpu: "RTX 3070 Ti Vision",
      cpu: "i5 11500KF",
      ram: "16GB DDR4 3200 Vengeance LPX",
      memory: "2TB HDD, 1TB SSD - M2",
      cooling: "Water Cooling",
      price: 4500
    },

    {
      id: 126,
      type: "Intel",
      imageUrl: "assets/PcParts/PCs/3060-pc.png",
      mobo: "Z390 - A Gaming",
      gpu: "RTX 3060 MSI",
      cpu: "i5 10500F",
      ram: "16GB DDR4 3200 G-Skill Ripjaws",
      memory: "1TB HDD, 500GB SSD - SATA",
      cooling: "Wind Cooling",
      price: 3000
    }
  ];

  getIntel() {
    return of(this.intelpcs);
  }

  // AMD PC


  amdpcs: PcsType[] = [
    {
      id: 127,
      type: "AMD",
      imageUrl: "assets/PcParts/PCs/6900xt-pc.png",
      mobo: "MSI MEG Ace",
      gpu: "Radeon 6900XT",
      cpu: "Ryzen Theadripper 3990X",
      ram: "32GB DDR5 6000 G-Skill Royal",
      memory: "8TB HDD, 4TB SSD - M2",
      cooling: "Water Cooling",
      price: 15000
    },

    {
      id: 128,
      type: "AMD",
      imageUrl: "assets/PcParts/PCs/6800xt-pc.png",
      mobo: "Z590 - H Gaming",
      gpu: "Radeon 6800XT",
      cpu: "Ryzen 9 5900X",
      ram: "32 GB DDR5 5600 Crucial Balistix",
      memory: "6TB HDD, 3TB SSD - M2",
      cooling: "Water Cooling",
      price: 10000
    },

    {
      id: 129,
      type: "AMD",
      imageUrl: "assets/PcParts/PCs/6700xt-pc.png",
      mobo: "Z490 - E Gaming",
      gpu: "Radeon 6700XT",
      cpu: "Ryzen 7 5800X",
      ram: "16 GB DDR4 4000 TeamGroup",
      memory: "4TB HDD, 2TB SSD - M2",
      cooling: "Water Cooling",
      price: 7000
    },
      
    {
      id: 130,
      type: "AMD",
      imageUrl: "assets/PcParts/PCs/6600xt-pc.png",
      mobo: "Z490 - A Gaming",
      gpu: "Radeon 6600XT",
      cpu: "Ryzen 5 5500X",
      ram: "16GB DDR4 3200 Adoto",
      memory: "2TB HDD, 1TB SSD - M2",
      cooling: "Wind Cooling",
      price: 4000
    },

    {
      id: 131,
      type: "AMD",
      imageUrl: "assets/PcParts/PCs/rx580-pc.png",
      mobo: "B550 - A Pro",
      gpu: "RX 580 8GB",
      cpu: "Ryzen 5 3600",
      ram: "16GB DDR4 3200 Crucial Balistix",
      memory: "1TB HDD, 500GB SSD - SATA",
      cooling: "Wind Cooling",
      price: 1500
    },
  ];

  getAmd() {
    return of(this.amdpcs);
  }

  constructor() { }
}
