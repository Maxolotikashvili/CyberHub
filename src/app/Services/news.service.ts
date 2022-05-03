import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface newsType {
  id: number,
  title: string,
  body: string,
  photoUrl: string
};

export interface partsType {
  id: number,
  router: string,
  imageUrl: string,
  name: string
};

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  // News
  news: newsType[] = [
    {
      id: 1,
      title: "Nvidia is set to spend at least $10B to secure its share of limited 5nm chip supply",
      body: "According to Hardware Times, Nvidia is set to pay the exorbitant amount of nearly $10 billion to secure its share of TSMC 5nm capacity. Nvidia is geared up to produce its next generation Ada Lovelace GPU on TSMC's N5 node.",
      photoUrl: "assets/News/nvidia-chip.jpg"
    },

    {
      id: 2,
      title: "Windows 11 Pro will soon force you to have a Microsoft account for installation",
      body: "Microsoft has announced that Windows 11 Pro users will soon be required to create a Microsoft account in order to use it. One will also be required to use the internet during the initial setup process",
      photoUrl: "assets/News/windows-11.jpg"
    },

    {
      id: 3,
      title: "Nvidia Announces GeForce RTX 3090 Ti",
      body: "The Nvidia GeForce RTX 3090 Ti is a GA102 GPU built on the 8nm process. It will have 40 Share teraflops, 78 Ray Tracing teraflops, 320 Tensor teraflops and 24GB of GDDR6X memory operating at 21Gbps.",
      photoUrl: "assets/News/rtx3090ti.jpg"
    },

    {
      id: 4,
      title: "Radeon 660M RDNA2 iGPU Outperforms Intel's Iris Xe iGPU In Gaming Benchmarks",
      body: "The Ryzen 5 6600H includes six cores and 12 threads, with a peak boost of 4.5 GHz and a default TDP of 45W.",
      photoUrl: "assets/News/radeon660m.jpg"
    },

    {
      id: 5,
      title: "ASRock Z690 Taichi Razer Edition Embraces Alder Lake Non-K Overclocking",
      body: "as verified in an in-depth review by HKEPC Hardware. Given the identical specs, we fully expect the regular Z690 Taichi to offer the same unlock baseclock overclocking capabilities.",
      photoUrl: "assets/News/z690taichi.jpeg"
    },

    {
      id: 6,
      title: "Thermaltake's Water Cooling Friendly ToughRAM RC DDR5 Kits Hit Retail",
      body: "Thermaltake ToughRAM RC DDR5 memory kits have started to become available at retail, as DDR5 Rams kick in.",
      photoUrl: "assets/News/thermaltake-water.jpg"
    },

    {
      id: 7,
      title: "RTX 3070 Laptops: All the Models You Can Buy Right Now",
      body: "RTX 3070 is a seriously capable laptop gaming GPU — armed with 5,120 CUDA cores, 8GB GDDR6 video memory and a boost clock speed up to 1,620 MHz.",
      photoUrl: "assets/News/rtxlaptops.jpg"
    },

    {
      id: 8,
      title: "Gigabyte's New PSU Supports Future PCIe 5.0 GPUs",
      body: "at Recent press release From Gigabyte, the company has announced an all-new power supply, called the UD1000GM that has been specifically optimized for the next generation of PCIe 5.0 graphics cards coming in the future.",
      photoUrl: "assets/News/gigabytepsu.jpg"
    }
  ];


    // Pc Parts
    pcParts: partsType[] = [
      {
        id: 1,
        router: "/build/mobos",
        imageUrl: "assets/Icons/mobo-icon.png",
        name: "Motherboard"
      },
  
      {
        id: 2,
        router: "/build/cpus",
        imageUrl: "assets/Icons/cpu-icon.png",
        name: "Cpu",
      },
  
      {
        id: 3,
        router: "/build/gpus",
        imageUrl: "assets/Icons/gpu-icon.png",
        name: "Video Card",
      },
  
      {
        id: 4,
        router: "/build/rams",
        imageUrl: "assets/Icons/ram-icon.png",
        name: "Memory",
      },
  
      {
        id: 5,
        router: "/build/psus",
        imageUrl: "assets/Icons/psu-icon.png",
        name: "Power Supply",
      },
  
      {
        id: 6,
        router: "/build/hdds",
        imageUrl: "assets/Icons/hdd-icon.png",
        name: "HDD",
      },
  
      {
        id: 7,
        router: "/build/ssds",
        imageUrl: "assets/Icons/ssd-icon.png",
        name: "SSD",
      },
  
      {
        id: 8,
        router: "/build/cpu-coolers",
        imageUrl: "assets/Icons/cooler-icon.png",
        name: "Cpu Cooler",
      },
  
      {
        id: 9,
        router: "/build/cases",
        imageUrl: "assets/Icons/case-icon.png",
        name: "Case",
      },
    ];

  constructor() { }

  // Get News
  getNews() {
    return of(this.news)
  };


  // Get Parts
  getParts() {
    return of(this.pcParts)
  };
}
