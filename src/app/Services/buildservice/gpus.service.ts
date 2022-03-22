import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface gpusType {
  gpuId: number,
  manufacturer: String,
  imageUrl: string,
  name: string,
  quantity: number,
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class GpusService {
  gpus: gpusType[] = [
    {
      gpuId: 1,
      manufacturer: "Asus",
      imageUrl: "/assets/PcParts/Gpus/Strix-3090.png",
      name: "Asus Rog Strix RTX 3090",
      quantity: 1,
      price: 1999.99
    },

    {
      gpuId: 2,
      manufacturer: "Asus",
      imageUrl: "assets/PcParts/Gpus/Strix-3080ti.png",
      name: "Asus Rog Strix RTX 3080Ti",
      quantity: 1,
      price: 1799.99
    },

    {
      gpuId: 3,
      manufacturer: "Asus",
      imageUrl: "assets/PcParts/Gpus/Strix-6900xt.png",
      name: "Asus Rog Strix Radeon 6900 XT",
      quantity: 1,
      price: 1499.99
    },

    {
      gpuId: 4,
      manufacturer: "Gigabyte",
      imageUrl: "/assets/PcParts/Gpus/Aorus-6700xt.png",
      name: "Aorus Radeon 6700 XT",
      quantity: 1,
      price: 1199.99
    },

    {
      gpuId: 5,
      manufacturer: "Nvidia",
      imageUrl: "/assets/PcParts/Gpus/Fe-3080.png",
      name: "Nvidia RTX 3080 FE",
      quantity: 1,
      price: 1099.99
    },

    {
      gpuId: 6,
      manufacturer: "Nvidia",
      imageUrl: "/assets/PcParts/Gpus/Fe-3080ti.png",
      name: "Nvidia RTX 3080Ti FE",
      quantity: 1,
      price: 1299.99
    },

    {
      gpuId: 7,
      manufacturer: "MSI",
      imageUrl: "assets/PcParts/Gpus/Msi-6800xt.png",
      name: "MSI Radeon 6800 XT",
      quantity: 1,
      price: 1199.99
    },

    {
      gpuId: 8,
      manufacturer: "Asus",
      imageUrl: "/assets/PcParts/Gpus/Tuf-3080ti.png",
      name: "Asus Tuf RTX 3080Ti",
      quantity: 1,
      price: 1369.99
    },

    {
      gpuId: 9,
      manufacturer: "Nvidia",
      imageUrl: "/assets/PcParts/Gpus/Fe-gtx1060.png",
      name: "Nvidia GTX 1060 FE",
      quantity: 1,
      price: 299.99
    },
  
    {
      gpuId: 10,
      manufacturer: "Gigabyte",
      imageUrl: "/assets/PcParts/Gpus/Vision-3060ti.png",
      name: "Gigabyte Vision RTX 3060Ti",
      quantity: 1,
      price: 799.99
    },

    {
      gpuId: 11,
      manufacturer: "Nvidia",
      imageUrl: "/assets/PcParts/Gpus/Fe-2080super.png",
      name: "Nvidia RTX 2080 Super FE",
      quantity: 1,
      price: 899.99
    },

    {
      gpuId: 12,
      manufacturer: "MSI",
      imageUrl: "/assets/PcParts/Gpus/Msi-1070ti.png",
      name: "MSI GTX 1070Ti",
      quantity: 1,
      price: 399.99
    },

    {
      gpuId: 13,
      manufacturer: "Gigabyte",
      imageUrl: "/assets/PcParts/Gpus/Aorus-3070ti.png",
      name: "Aorus RTX 3070Ti",
      quantity: 1,
      price: 1099.99
    },

    {
      gpuId: 14,
      manufacturer: "Asus",
      imageUrl: "/assets/PcParts/Gpus/Strix-1070.png",
      name: "Asus Rog Strix GTX 1070 OE",
      quantity: 1,
      price: 349.99
    },

    {
      gpuId: 15,
      manufacturer: "Nvidia",
      imageUrl: "/assets/PcParts/Gpus/Fe-1080ti.png",
      name: "Nvidia GTX 1080Ti",
      quantity: 1,
      price: 699.99
    },

    {
      gpuId: 16,
      manufacturer: "Gigabyte",
      imageUrl: "/assets/PcParts/Gpus/Gigabyte-3060ti.png",
      name: "Gigabyte RTX 3060Ti",
      quantity: 1,
      price: 899.99
    },

    {
      gpuId: 17,
      manufacturer: "Gigabyte",
      imageUrl: "/assets/PcParts/Gpus/Aorus-3080.png",
      name: "Aorus Extreme RTX 3080",
      quantity: 1,
      price: 1099.99
    }

  ];

  constructor() { }

  getGpus() {
    return of(this.gpus)
  }
}
