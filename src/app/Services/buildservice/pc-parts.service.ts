import { Injectable } from '@angular/core';
import { PcPartType } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class PcPartsService {

  pcParts: PcPartType[] = [
    {
      id: 1,
      caseId: 1,
      productName: 'case',
      manufacturer: "Thermaltake",
      imageUrl: "assets/PcParts/Cases/Thermaltake-ah-t600.png",
      name: "Thermaltake AH-T 600",
      quantity: 1,
      price: 469
    },

    {
      id: 2,
      caseId: 2,
      productName: 'case',
      manufacturer: "Thermaltake",
      imageUrl: "assets/PcParts/Cases/Thermaltake-ah-t600white.png",
      name: "Thermaltake AH-T 600",
      quantity: 1,
      price: 469
    },
    
    {
      id: 3,
      caseId: 3,
      productName: 'case',
      manufacturer: "Thermaltake",
      imageUrl: "assets/PcParts/Cases/Thermaltake-view71-rgbplus.png",
      name: "Thermaltake View 71 RGB",
      quantity: 1,
      price: 379
    },
    
    {
      id: 4,
      caseId: 4,
      productName: 'case',
      manufacturer: "Thermaltake",
      imageUrl: "assets/PcParts/Cases/Thermaltake-view71.png",
      name: "Thermaltake View 71",
      quantity: 1,
      price: 359
    },

    {
      id: 5,
      caseId: 5,
      productName: 'case',
      manufacturer: "Thermaltake",
      imageUrl: "assets/PcParts/Cases/thermaltake-divier-mid.png",
      name: "Thermaltake Divider",
      quantity: 1,
      price: 249
    },
    
    {
      id: 6,
      caseId: 6,
      productName: 'case',
      manufacturer: "Thermaltake",
      imageUrl: "assets/PcParts/Cases/thermaltake-divider-midwhite.png",
      name: "Thermaltake Divider White",
      quantity: 1,
      price: 249
    },
    
    {
      id: 7,
      caseId: 7,
      productName: 'case',
      manufacturer: "Thermaltake",
      imageUrl: "assets/PcParts/Cases/thermaltake-commander-midtower.png",
      name: "Thermaltake Commander",
      quantity: 1,
      price: 219
    },

    {
      id: 8,
      caseId: 8,
      productName: 'case',
      manufacturer: "Anidees",
      imageUrl: "assets/PcParts/Cases/Anidees-Ai-Crystal-XL-full.png",
      name: "Anidees Crystal XL",
      quantity: 1,
      price: 259
    },

    {
      id: 9,
      caseId: 9,
      productName: 'case',
      manufacturer: "Corsair",
      imageUrl: "assets/PcParts/Cases/icue5000x.png",
      name: "Corsair iCue 5000X",
      quantity: 1,
      price: 199
    },

    {
      id: 10,
      caseId: 10,
      productName: 'case',
      manufacturer: "Corsair",
      imageUrl: "assets/PcParts/Cases/icue4000x.jpg",
      name: "Corsair iCue 4000X",
      quantity: 1,
      price: 179
    },
    
    {
      id: 11,
      caseId: 11,
      productName: 'case',
      manufacturer: "Gamemax",
      imageUrl: "assets/PcParts/Cases/Gamemax-atx-rgb.png",
      name: "Gamemax Diamond Black",
      quantity: 1,
      price: 169
    },
    
    {
      id: 12,
      caseId: 12,
      productName: 'case',
      manufacturer: "Genesis",
      imageUrl: "assets/PcParts/Cases/Genesis-midtower.png",
      name: "Genesis IRID 515 Black",
      quantity: 1,
      price: 159
    },

    {
      id: 13,
      caseId: 13,
      productName: 'case',
      manufacturer: "Asus",
      imageUrl: "assets/PcParts/Cases/tufgaming-gt501mid.png",
      name: "Asus Tuf Gaming GT501",
      quantity: 1,
      price: 149
    },
    
    {
      id: 14,
      caseId: 14,
      productName: 'case',
      manufacturer: "Asus",
      imageUrl: "assets/PcParts/Cases/tufgaming-gt501midwhite.png",
      name: "Asus Tuf Gaming GT501",
      quantity: 1,
      price: 149
    },

    {
      id: 15,
      coolerId: 1,
      productName: 'cpu-cooler',
      imageUrl: "assets/PcParts/Cpu-Coolers/corsair-h150cappelix.png",
      manufacturer: "Corsair",
      name: "Corsair H150i Elite Cappelix",
      type: "Liquid",
      quantity: 1,
      price: 279
    },

    {
      id: 16,
      coolerId: 2,
      productName: 'cpu-cooler',
      imageUrl: "assets/PcParts/Cpu-Coolers/h115i.png",
      manufacturer: "Corsair",
      name: "Corsair H115i Pro",
      type: "Liquid",
      quantity: 1,
      price: 199
    },

    {
      id: 17,
      coolerId: 3,
      productName: 'cpu-cooler',
      imageUrl: "assets/PcParts/Cpu-Coolers/h100i.png",
      manufacturer: "Corsair",
      name: "Corsair H100i",
      type: "Liquid",
      quantity: 1,
      price: 139
    },

    {
      id: 18,
      coolerId: 4,
      productName: 'cpu-cooler',
      imageUrl: "assets/PcParts/Cpu-Coolers/kraken-z73.png",
      manufacturer: "NZXT",
      name: "NZXT Kraken Z73",
      type: "Liquid",
      quantity: 1,
      price: 369
    },

    {
      id: 19,
      coolerId: 5,
      productName: 'cpu-cooler',
      imageUrl: "assets/NZXT/kraken-z73.png",
      manufacturer: "NZXT",
      name: "NZXT Kraken Z73 White",
      type: "Liquid",
      quantity: 1,
      price: 369
    },

    {
      id: 20,
      coolerId: 6,
      productName: 'cpu-cooler',
      imageUrl: "assets/PcParts/Cpu-Coolers/kraken-z63.png",
      manufacturer: "NZXT",
      name: "NZXT Kraken Z63",
      type: "Liquid",
      quantity: 1,
      price: 249
    },

    {
      id: 21,
      coolerId: 7,
      productName: 'cpu-cooler',
      imageUrl: "assets/NZXT/kraken-x73.png",
      manufacturer: "NZXT",
      name: "NZXT Kraken X73 White",
      type: "Liquid",
      quantity: 1,
      price: 189
    },

    {
      id: 22,
      coolerId: 8,
      productName: 'cpu-cooler',
      imageUrl: "assets/PcParts/Cpu-Coolers/asus-l360.png",
      manufacturer: "Asus",
      name: "Asus Rog LC360",
      type: "Liquid",
      quantity: 1,
      price: 359
    },

    {
      id: 23,
      coolerId: 9,
      productName: 'cpu-cooler',
      imageUrl: "assets/PcParts/Cpu-Coolers/rog-lc240.png",
      manufacturer: "Asus",
      name: "Asus Rog LC240",
      type: "Liquid",
      quantity: 1,
      price: 279
    },

    {
      id: 24,
      coolerId: 10,
      productName: 'cpu-cooler',
      imageUrl: "assets/PcParts/Cpu-Coolers/Deepcool-gammax-l360.png",
      manufacturer: "DeepCool",
      name: "DeepCool Gammaxx L360",
      type: "Liquid",
      quantity: 1,
      price: 149
    },

    {
      id: 25,
      coolerId: 11,
      productName: 'cpu-cooler',
      imageUrl: "assets/PcParts/Cpu-Coolers/Gammax-l240.png",
      manufacturer: "DeepCool",
      name: "DeepCool Gammaxx L240",
      type: "Liquid",
      quantity: 1,
      price: 109
    },

    {
      id: 26, 
      coolerId: 12,
      productName: 'cpu-cooler',
      imageUrl: "assets/PcParts/Cpu-Coolers/gammaxx-l240argb.png",
      manufacturer: "DeepCool",
      name: "DeepCool Gammaxx L240 ARGB",
      type: "Liquid",
      quantity: 1,
      price: 109
    },

    {
      id: 27,
      coolerId: 13,
      productName: 'cpu-cooler',
      imageUrl: "assets/PcParts/Cpu-Coolers/Thermaltake-th360.png",
      manufacturer: "Thermaltake",
      name: "Thermaltake TH360",
      type: "Liquid",
      quantity: 1,
      price: 219
    },

    {
      id: 28,
      coolerId: 14,
      productName: 'cpu-cooler',
      imageUrl: "assets/PcParts/Cpu-Coolers/Thermaltake-th360argb.png",
      manufacturer: "Thermaltake",
      name: "Thermaltake TH360 White",
      type: "Liquid",
      quantity: 1,
      price: 219
    },

    {
      id: 29,
      coolerId: 15,
      productName: 'cpu-cooler',
      imageUrl: "assets/PcParts/Cpu-Coolers/Thermaltake-th240.png",
      manufacturer: "Thermaltake",
      name: "Thermaltake TH240 White",
      type: "Liquid",
      quantity: 1,
      price: 169
    },

    {
      id: 30,
      coolerId: 16,
      productName: 'cpu-cooler',
      imageUrl: "assets/PcParts/Cpu-Coolers/thermaltake-pureplus.png",
      manufacturer: "Thermaltake",
      name: "Thermaltake Pure Plus",
      type: "Wind",
      quantity: 1,
      price: 99
    },

    {
      id: 31,
      coolerId: 16,
      productName: 'cpu-cooler',
      imageUrl: "assets/PcParts/Cpu-Coolers/coolermaster-masterfan-mf120.png",
      manufacturer: "Cooler Master",
      name: "Cooler Master MF120",
      type: "Wind",
      quantity: 1,
      price: 89
    },

    {
      id: 32,
      coolerId: 17,
      productName: 'cpu-cooler',
      imageUrl: "assets/PcParts/Cpu-Coolers/zalman-CNPS20x.png",
      manufacturer: "Zalman",
      name: "Zalman CNPS20X",
      type: "Wind",
      quantity: 1,
      price: 79
    },

    {
      id: 33,
      coolerId: 18,
      productName: 'cpu-cooler',
      imageUrl: "assets/PcParts/Cpu-Coolers/ux200.png",
      manufacturer: "Thermaltake",
      name: "Thermaltake UX200 ARGB",
      type: "Wind",
      quantity: 1,
      price: 69
    },

    {
      id: 34,
      coolerId: 19,
      productName: 'cpu-cooler',
      imageUrl: "assets/PcParts/Cpu-Coolers/gammax-gte.png",
      manufacturer: "DeepCool",
      name: "DeepCool Gammaxx GTE",
      type: "Wind",
      quantity: 1,
      price: 69
    },

    {
      id: 35,
      cpuId: 1,
      productName: 'cpu',
      manufacturer: "AMD",
      imageUrl: "assets/PcParts/Cpus/Amd-ryzenthreadripper.png",
      name: "AMD Ryzen Theadripper 3990X",
      quantity: 1,
      price: 3499
    },
    
    {
      id: 36,
      cpuId: 2,
      productName: 'cpu',
      manufacturer: "Intel",
      imageUrl: "assets/PcParts/Cpus/i9-12900k.png",
      name: "Intel Core i9 12900K",
      quantity: 1,
      price: 1499
    },

    {
      id: 37,
      cpuId: 3,
      productName: 'cpu',
      manufacturer: "Intel",
      imageUrl: "assets/PcParts/Cpus/i9-11900k.png",
      name: "Intel Core i9 11900K",
      quantity: 1,
      price: 999
    },

    {
      id: 38,
      cpuId: 4,
      productName: 'cpu',
      manufacturer: "Intel",
      imageUrl: "assets/PcParts/Cpus/i9-11900f.png",
      name: "Intel Core i9 11900F",
      quantity: 1,
      price: 899
    },

    {
      id: 39,
      cpuId: 5,
      productName: 'cpu',
      manufacturer: "Intel",
      imageUrl: "assets/PcParts/Cpus/i9-9900k.png",
      name: "Intel Core i9 9900KF",
      quantity: 1,
      price: 809
    },

    {
      id: 40,
      cpuId: 6,
      productName: 'cpu',
      manufacturer: "AMD", 
      imageUrl: "assets/PcParts/Cpus/Amd-ryzen7.png",
      name: "AMD Ryzen 9 5900X",
      quantity: 1,
      price: 749
    },

    {
      id: 41,
      cpuId: 7,
      productName: 'cpu',
      manufacturer: "Intel",
      imageUrl: "assets/PcParts/Cpus/i7-11700k.png",
      name: "Intel Core i7 11700K",
      quantity: 1,
      price: 599
    },

    {
      id: 42,
      cpuId: 8,
      productName: 'cpu',
      manufacturer: "Intel",
      imageUrl: "assets/PcParts/Cpus/i7-10700kf.png",
      name: "Intel Core i7 10700KF",
      quantity: 1,
      price: 499
    },

    {
      id: 43,
      cpuId: 9,
      productName: 'cpu',
      manufacturer: "AMD",
      imageUrl: "assets/PcParts/Cpus/Amd-ryzen7.png",
      name: "AMD Ryzen 7 5800X",
      quantity: 1,
      price: 449
    },

    {
      id: 44,
      cpuId: 10,
      productName: 'cpu',
      manufacturer: "Intel",
      imageUrl: "assets/PcParts/Cpus/i5-11500f.png",
      name: "Intel Core i5 11500F",
      quantity: 1,
      price: 299
    },

    {
      id: 45,
      cpuId: 11,
      productName: 'cpu',
      manufacturer: "Intel",
      imageUrl: "assets/PcParts/Cpus/i5-10500kf.png",
      name: "Intel Core i5 10500KF",
      quantity: 1,
      price: 249
    },

    {
      id: 46,
      gpuId: 1,
      productName: 'gpu',
      manufacturer: "Asus",
      imageUrl: "assets/PcParts/Gpus/Strix-3090.png",
      name: "Asus Rog Strix RTX 3090",
      quantity: 1,
      price: 1999
    },

    {
      id: 47,
      gpuId: 2,
      productName: 'gpu',
      manufacturer: "Asus",
      imageUrl: "assets/PcParts/Gpus/Strix-3080ti.png",
      name: "Asus Rog Strix RTX 3080Ti",
      quantity: 1,
      price: 1799
    },

    {
      id: 48,
      gpuId: 3,
      productName: 'gpu',
      manufacturer: "Asus",
      imageUrl: "assets/PcParts/Gpus/Strix-6900xt.png",
      name: "Asus Rog Strix Radeon 6900",
      quantity: 1,
      price: 1499
    },

    {
      id: 49,
      gpuId: 4,
      productName: 'gpu',
      manufacturer: "Gigabyte",
      imageUrl: "assets/PcParts/Gpus/Aorus-6700xt.png",
      name: "Aorus Radeon 6700 XT",
      quantity: 1,
      price: 1199
    },

    {
      id: 50,
      gpuId: 5,
      productName: 'gpu',
      manufacturer: "Nvidia",
      imageUrl: "assets/PcParts/Gpus/Fe-3080.png",
      name: "Nvidia RTX 3080 FE",
      quantity: 1,
      price: 1099
    },

    {
      id: 51,
      gpuId: 6,
      productName: 'gpu',
      manufacturer: "Nvidia",
      imageUrl: "assets/PcParts/Gpus/Fe-3080ti.png",
      name: "Nvidia RTX 3080Ti FE",
      quantity: 1,
      price: 1299
    },

    {
      id: 52,
      gpuId: 7,
      productName: 'gpu',
      manufacturer: "MSI",
      imageUrl: "assets/PcParts/Gpus/Msi-6800xt.png",
      name: "MSI Radeon 6800 XT",
      quantity: 1,
      price: 1199
    },

    {
      id: 53,
      gpuId: 8,
      productName: 'gpu',
      manufacturer: "Asus",
      imageUrl: "assets/PcParts/Gpus/Tuf-3080ti.png",
      name: "Asus Tuf RTX 3080Ti",
      quantity: 1,
      price: 1369
    },

    {
      id: 54,
      gpuId: 9,
      productName: 'gpu',
      manufacturer: "Nvidia",
      imageUrl: "assets/PcParts/Gpus/Fe-gtx1060.png",
      name: "Nvidia GTX 1060 FE",
      quantity: 1,
      price: 299
    },
  
    {
      id: 55,
      gpuId: 10,
      productName: 'gpu',
      manufacturer: "Gigabyte",
      imageUrl: "assets/PcParts/Gpus/Vision-3060ti.png",
      name: "Gigabyte Vision RTX 3060Ti",
      quantity: 1,
      price: 799
    },

    {
      id: 56,
      gpuId: 11,
      productName: 'gpu',
      manufacturer: "Nvidia",
      imageUrl: "assets/PcParts/Gpus/Fe-2080super.png",
      name: "Nvidia RTX 2080 Super FE",
      quantity: 1,
      price: 899
    },

    {
      id: 57,
      gpuId: 12,
      productName: 'gpu',
      manufacturer: "MSI",
      imageUrl: "assets/PcParts/Gpus/Msi-1070ti.png",
      name: "MSI GTX 1070Ti",
      quantity: 1,
      price: 399
    },

    {
      id: 58,
      gpuId: 13,
      productName: 'gpu',
      manufacturer: "Gigabyte",
      imageUrl: "assets/PcParts/Gpus/Aorus-3070ti.png",
      name: "Aorus RTX 3070Ti",
      quantity: 1,
      price: 1099
    },

    {
      id: 59,
      gpuId: 14,
      productName: 'gpu',
      manufacturer: "Asus",
      imageUrl: "assets/PcParts/Gpus/Strix-1070.png",
      name: "Asus Rog Strix GTX 1070 OE",
      quantity: 1,
      price: 349
    },

    {
      id: 60,
      gpuId: 15,
      productName: 'gpu',
      manufacturer: "Nvidia",
      imageUrl: "assets/PcParts/Gpus/Fe-1080ti.png",
      name: "Nvidia GTX 1080Ti",
      quantity: 1,
      price: 699
    },

    {
      id: 61,
      gpuId: 16,
      productName: 'gpu',
      manufacturer: "Gigabyte",
      imageUrl: "assets/PcParts/Gpus/Gigabyte-3060ti.png",
      name: "Gigabyte RTX 3060Ti",
      quantity: 1,
      price: 899
    },

    {
      id: 62,
      gpuId: 17,
      productName: 'gpu',
      manufacturer: "Gigabyte",
      imageUrl: "assets/PcParts/Gpus/Aorus-3080.png",
      name: "Aorus Extreme RTX 3080",
      quantity: 1,
      price: 1099
    },

    {
      id: 63,
      hddId: 1,
      productName: 'hdd',
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
      productName: 'hdd',
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
      productName: 'hdd',
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
      productName: 'hdd',
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
      productName: 'hdd',
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
      productName: 'hdd',
      manufacturer: "Western Digital",
      imageUrl: "assets/PcParts/HDDs/wd-black1tb.png",
      name: "Western Digital Black Gaming",
      memory: "1 TB",
      quantity: 1,
      price: 59
    },

    {
      id: 69,
      headsetId: 1,
      productName: 'headset',
      manufacturer: "Steelseries",
      imageUrl: "assets/PcParts/Headsets/steelseriesarctispro.png",
      name: "Steelseries Arctis Pro",
      wireless: false,
      quantity: 1,
      price: 559
    },

    {
      id: 70,
      headsetId: 2,
      productName: 'headset',
      manufacturer: "Steelseries",
      imageUrl: "assets/PcParts/Headsets/arctis9.png",
      name: "Steelseries Arctis 9",
      wireless: true,
      quantity: 1,
      price: 359
    },

    {
      id: 71,
      headsetId: 3,
      productName: 'headset',
      manufacturer: "Steelseries",
      imageUrl: "assets/PcParts/Headsets/steelseriesarctis7.png",
      name: "Steelseries Arctis 7",
      wireless: true,
      quantity: 1,
      price: 329
    },

    {
      id: 72,
      headsetId: 4,
      productName: 'headset',
      manufacturer: "Razer",
      imageUrl: "assets/PcParts/Headsets/razer-nari.png",
      name: "Razer Nari",
      wireless: true,
      quantity: 1,
      price: 109
    },

    {
      id: 73,
      headsetId: 5,
      productName: 'headset',
      manufacturer: "Asus",
      imageUrl: "assets/PcParts/Headsets/rog-deltargb.png",
      name: "Asus Rog Delta RGB",
      wireless: false,
      quantity: 1,
      price: 229
    },

    {
      id: 74,
      headsetId: 6,
      productName: 'headset',
      manufacturer: "HyperX",
      imageUrl: "assets/PcParts/Headsets/Cloud-orbits.png",
      name: "HyperX Cloud Orbit S",
      wireless: true,
      quantity: 1,
      price: 399
    },

    {
      id: 75,
      headsetId: 7,
      productName: 'headset',
      manufacturer: "HyperX",
      imageUrl: "assets/PcParts/Headsets/cloud2-wired.png",
      name: "HyperX Cloud 2",
      wireless: false,
      quantity: 1,
      price: 149
    },

    {
      id: 76,
      headsetId: 8,
      productName: 'headset',
      manufacturer: "HyperX",
      imageUrl: "assets/PcParts/Headsets/cloudii-71.png",
      name: "HyperX Cloud Orbit 71",
      wireless: false,
      quantity: 1,
      price: 119
    },

    {
      id: 77,
      keyboardId: 1,
      productName: 'keyboard',
      manufacturer: "HyperX",
      imageUrl: "assets/PcParts/Keyboards/elite2.png",
      name: "HyperX Alloy Elite 2",
      switch: "MX Cherry Red",
      quantity: 1,
      price: 279
    },

    {
      id: 78,
      keyboardId: 2,
      productName: 'keyboard',
      manufacturer: "HyperX",
      imageUrl: "assets/PcParts/Keyboards/fps.png",
      name: "HyperX Alloy FPS",
      switch: "Kalih Silver",
      quantity: 1,
      price: 189
    },

    {
      id: 79,
      keyboardId: 3,
      productName: 'keyboard',
      manufacturer: "HyperX",
      imageUrl: "assets/PcParts/Keyboards/origins.png",
      name: "HyperX Alloy Origins",
      switch: "MX Cherry Red",
      quantity: 1,
      price: 109
    },

    {
      id: 80,
      keyboardId: 4,
      productName: 'keyboard',
      manufacturer: "Razer",
      imageUrl: "assets/PcParts/Keyboards/razer-blackwidowv3green.png",
      name: "Razer Blackwidow 3",
      switch: "Kalih Silver",
      quantity: 1,
      price: 189
    },

    {
      id: 81,
      keyboardId: 5,
      productName: 'keyboard',
      manufacturer: "Asus",
      imageUrl: "assets/PcParts/Keyboards/Rog-claymore.png",
      name: "Asus Rog Claymore",
      switch: "Blue",
      quantity: 1,
      price: 219
    },



    {
      id: 82,
      moboId: 1,
      productName: 'mobo',
      manufacturer: "MSI",
      imageUrl:  "assets/PcParts/MOBOs/Msi-meggodlike.png",
      name: "MSI MEG Godlike",
      socket: "LGA 1700",
      quantity: 1,
      price: 1799
    },

    {
      id: 83,
      moboId: 2,
      productName: 'mobo',
      manufacturer: "MSI",
      imageUrl: "assets/PcParts/MOBOs/Msi-megace.png",
      name: "MSI Meg Z490 Ace",
      socket: "LGA 1200",
      quantity: 1,
      price: 1199
    },

    {
      id: 84,
      moboId: 3,
      productName: 'mobo',
      manufacturer: "Asus",
      imageUrl: "assets/PcParts/MOBOs/rog-maximus12hero.png",
      name: "Asus ROG Maximus 12 Hero",
      socket: "LGA 1700",
      quantity: 1,
      price: 1099
    },

    {
      id: 85,
      moboId: 4,
      productName: 'mobo',
      manufacturer: "Asus",
      imageUrl: "assets/PcParts/MOBOs/rog-maximus11wifi.png",
      name: "Asus ROG Maximus 11 Hero",
      socket: "LGA 1151",
      quantity: 1,
      price: 899
    },

    {
      id: 86,
      moboId: 5,
      productName: 'mobo',
      manufacturer: "Asus",
      imageUrl: "assets/PcParts/MOBOs/Strix-z490egaming.png",
      name: "Asus ROG Z490 - E Gaming",
      socket: "LGA 1200",
      quantity: 1,
      price: 599
    },

    {
      id: 87,
      moboId: 6,
      productName: 'mobo',
      manufacturer: "Asus",
      imageUrl: "assets/PcParts/MOBOs/strix-z490hgaming.png",
      name: "Asus ROG Z490 - H Gaming",
      socket: "LGA 1200",
      quantity: 1,
      price: 369
    },

    {
      id: 88,
      moboId: 7,
      productName: 'mobo',
      manufacturer: "Gigabyte",
      imageUrl: "assets/PcParts/MOBOs/Gigabyte-z690master.png",
      name: "Gigabyte Z690 Aorus Master",
      socket: "LGA 1700",
      quantity: 1,
      price: 479
    },

    {
      id: 89,
      moboId: 8,
      productName: 'mobo',     
      manufacturer: "Gigabyte",
      imageUrl: "assets/PcParts/MOBOs/z590aoruselite.png",
      name: "Gigabyte Z590 Aorus Elite",
      socket: "LGA 1200",
      quantity: 1,
      price: 499
    },

    {
      id: 90,
      moboId: 9,
      productName: 'mobo',
      manufacturer: "Gigabyte",
      imageUrl: "assets/PcParts/MOBOs/z390aorusprowifi.png",
      name: "Gigabyte Z390 Aorus Pro",
      socket: "LGA 1151",
      quantity: 1,
      price: 399
    },

    {
      id: 91,
      psuId: 1,
      productName: 'psu',
      manufacturer: "Be Quet!",
      imageUrl: "assets/PcParts/Psus/bequet-darkpowerpro12-1500w.png",
      name: "Be Quet! Dark Power Pro 12",
      power: 1500,
      efficiency: "80+ Titanium",
      quantity: 1,
      price: 599
    },

    {
      id: 92,
      psuId: 2,
      productName: 'psu',
      manufacturer: "Be Quet!",
      imageUrl: "assets/PcParts/Psus/bequet-darkpowerpro12-1500w.png",
      name: "Be Quet! Dark Power Pro 12",
      power: 1000,
      efficiency: "80+ Titanium",
      quantity: 1,
      price: 399
    },

    {
      id: 93,
      psuId: 3,
      productName: 'psu',
      manufacturer: "Evga",
      imageUrl: "assets/PcParts/Psus/Supernova-1000w.png",
      name: "Evga Supernova",
      power: 1000,
      efficiency: "80+ Titanium",
      quantity: 1,
      price: 329
    },

    {
      id: 94,
      psuId: 4,
      productName: 'psu',
      manufacturer: "Evga",
      imageUrl: "assets/PcParts/Psus/evga-g61000w.png",
      name: "Evga G6",
      power: 1000,
      efficiency: "80+ Platinum",
      quantity: 1,
      price: 279
    },

    {
      id: 95,
      psuId: 5,
      productName: 'psu',
      manufacturer: "Evga",
      imageUrl: "assets/PcParts/Psus/evga-600w.png",
      name: "Evga Standart",
      power: 600,
      efficiency: "80+ Bronze",
      quantity: 1,
      price: 149
    },

    {
      id: 96,
      psuId: 6,
      productName: 'psu',
      manufacturer: "Thermaltake",
      imageUrl: "assets/PcParts/Psus/thermaltake-toughpowere1200w.png",
      name: "Thermaltake Toughpower",
      power: 1200,
      efficiency: "80+ Platinum",
      quantity: 1,
      price: 289
    },

    {
      id: 97,
      psuId: 7,
      productName: 'psu',
      manufacturer: "Thermaltake",
      imageUrl: "assets/PcParts/Psus/thermaltaketoughpower-850w.png",
      name: "Thermaltake Toughpower",
      power: 850,
      efficiency: "80+ Gold",
      quantity: 1,
      price: 209
    },

    {
      id: 98,
      psuId: 8,
      productName: 'psu',
      manufacturer: "Thermaltake",
      imageUrl: "assets/PcParts/Psus/thermaltake-toughpower-500w.png",
      name: "Thermaltake Toughpower",
      power: 500,
      efficiency: "80+ Bronze",
      quantity: 1,
      price: 159
    },

    {
      id: 99,
      psuId: 9,
      productName: 'psu',
      manufacturer: "DeepCool",
      imageUrl: "assets/PcParts/Psus/deepcool-850m.png",
      name: "DeepCool M-V2L",
      power: 850,
      efficiency: "80+ Gold",
      quantity: 1,
      price: 199
    },

    {
      id: 100,
      ramId: 1,
      productName: 'ram',
      manufacturer: "Gskill",
      imageUrl: "assets/PcParts/Rams/Gskill-tridentz5-6000-32gb.png",
      name: "G Skill Trident Z5",
      memory: "32 GB",
      quantity: 1,
      price: 899
    },

    {
      id: 101,
      ramId: 2,
      productName: 'ram',
      manufacturer: "Gskill",
      imageUrl: "assets/PcParts/Rams/Gskill-tridentzroyal-64gb.png",
      name: "G Skill Trident Z Royal Elite",
      memory: "64 GB",
      quantity: 1,
      price: 849
    },

    {
      id: 102,
      ramId: 3,
      productName: 'ram',
      manufacturer: "Gskill",
      imageUrl: "assets/PcParts/Rams/Gskill-tridentz-neo-32gb.png",
      name: "G Skill Trident Z Neo",
      memory: "32 GB",
      quantity: 1,
      price: 499
    },

    {
      id: 103,
      ramId: 4,
      productName: 'ram',
      manufacturer: "Gskill",
      imageUrl: "assets/PcParts/Rams/Gskill-tridentzrgb-32gb.png",
      name: "G Skill Trident Z RGB",
      memory: "32 GB",
      quantity: 1,
      price: 419
    },

    {
      id: 104,
      ramId: 5,
      productName: 'ram',
      manufacturer: "Gskill",
      imageUrl: "assets/PcParts/Rams/Gskill-ripjaws-16gb.png",
      name: "G Skill Ripjaws",
      memory: "16 GB",
      quantity: 1,
      price: 239
    },

    {
      id: 105,
      ramId: 6,
      productName: 'ram',
      manufacturer: "Corsair",
      imageUrl: "assets/PcParts/Rams/Corsair-dominatorplatinum-32gb.png",
      name: "Corsair Dominator Platinum",
      memory: "32 GB",
      quantity: 1,
      price: 499
    },

    {
      id: 106,
      ramId: 7,
      productName: 'ram',
      manufacturer: "Corsair",
      imageUrl: "assets/PcParts/Rams/Corsair-dominatorplatinumwhite-64gb.png",
      name: "Corsair Dominator White",
      memory: "64 GB",
      quantity: 1,
      price: 869
    },

    {
      id: 107,
      ramId: 8,
      productName: 'ram',
      manufacturer: "Corsair",
      imageUrl: "assets/PcParts/Rams/Vengeance-rgbpro-32gb.png",
      name: "Corsair Vengeance RGB Pro",
      memory: "32 GB",
      quantity: 1,
      price: 399
    },

    {
      id: 108,
      ramId: 9,
      productName: 'ram',
      manufacturer: "Corsair",
      imageUrl: "assets/PcParts/Rams/vengeance-lpx-16gb.png",
      name: "Corsair Vengeance LPX",
      memory: "16 GB",
      quantity: 1,
      price: 179
    },

    {
      id: 109,
      ramId: 10,
      productName: 'ram',
      manufacturer: "Corsair",
      imageUrl: "assets/PcParts/Rams/vengeance-sl-16gb.png",
      name: "Corsair Vengeance RGB SL",
      memory: "16 GB",
      quantity: 1,
      price: 169
    },

    {
      id: 110,
      ramId: 11,
      productName: 'ram',
      manufacturer: "Teamgroup",
      imageUrl: "assets/PcParts/Rams/Teamgroup-tforce-16gb.png",
      name: "Teamgroup T - Force",
      memory: "16 GB",
      quantity: 1,
      price: 159
    },

    {
      id: 111,
      ramId: 12,
      productName: 'ram',
      manufacturer: "Crucial",
      imageUrl: "assets/PcParts/Rams/Crucial-balistix-16gb.png",
      name: "Crucial Balistix White",
      memory: "16 GB",
      quantity: 1,
      price: 149
    },

    {
      id: 112,
      ssdId: 1,
      productName: 'ssd',
      manufacturer: "Seagate",
      type: "SSD",
      imageUrl: "assets/PcParts/SSDs/firecuda-530headsink-2tb.png",
      name: "Seagate Firecuda 530",
      memory: "2 TB",
      quantity: 1,
      price: 879
    },

    {
      id: 113,
      ssdId: 2,
      productName: 'ssd',
      manufacturer: "Seagate",
      type: "SSD",
      imageUrl: "assets/PcParts/SSDs/firecuda-530-2tb.png",
      name: "Seagate Firecuda 530",
      memory: "2 TB",
      quantity: 1,
      price: 849.99
    },

    {
      id: 114,
      ssdId: 3,
      productName: 'ssd',
      manufacturer: "Seagate",
      type: "SSD",
      imageUrl: "assets/PcParts/SSDs/firecuda-510-500gb.png",
      name: "Seagate Firecuda 510",
      memory: "500 GB",
      quantity: 1,
      price: 119
    },

    {
      id: 115,
      ssdId: 4,
      productName: 'ssd',
      manufacturer: "Samsung",
      type: "SSD",
      imageUrl: "assets/PcParts/SSDs/m2-970evoplus-250gb.png",
      name: "Samsung 970 Evo Plus",
      memory: "250 GB",
      quantity: 1,
      price: 79
    },

    {
      id: 116,
      ssdId: 5,
      productName: 'ssd',
      manufacturer: "Samsung",
      type: "SSD",
      imageUrl: "assets/PcParts/SSDs/M2-980evo-500gb.png",
      name: "Samsung 980 Evo",
      memory: "1 TB",
      quantity: 1,
      price: 299
    },

    {
      id: 117,
      ssdId: 6,
      productName: 'ssd',
      manufacturer: "Samsung",
      type: "SSD",
      imageUrl: "assets/PcParts/SSDs/samsung980-ssd1tb.png",
      name: "Samsung 980 Evo",
      memory: "500 GB",
      quantity: 1,
      price: 149
    },

    {
      id: 118,
      ssdId: 7,
      productName: 'ssd',
      manufacturer: "Samsung",
      type: "Sata",
      imageUrl: "assets/PcParts/SSDs/sata-870evo-1tb.png",
      name: "Samsung 870 Evo",
      memory: "1 TB",
      quantity: 1,
      price: 199
    },

    {
      id: 119,
      ssdId: 8,
      productName: 'ssd',
      manufacturer: "Western Digital",
      type: "SSD",
      imageUrl: "assets/PcParts/SSDs/WD-black-sn750-1tb.png",
      name: "Western Digital Black SN",
      memory:"1 TB",
      quantity: 1,
      price: 379
    },

    {
      id: 120,
      ssdId: 9,
      productName: 'ssd',
      manufacturer: "Western Digital",
      type: "SSD",
      imageUrl: "assets/PcParts/SSDs/wd-bluessd-500gb.png",
      name: "Western Digital Blue",
      memory: "500 GB",
      quantity: 1,
      price: 179
    },

    {
      id: 121,
      ssdId: 10,
      productName: 'ssd',
      manufacturer: "Western Digital",
      type: "SSD",
      imageUrl: "assets/PcParts/SSDs/wd-greenssd-240gb.png",
      name: "Western Digital Green",
      memory: "250 GB",
      quantity: 1,
      price: 89
    },
    
    {
      id: 122,
      manufacturer: "Intel",
      productName: 'pc',
      imageUrl: "assets/PcParts/PCs/3090-pc.png",
      mobo: "MSI MEG Godlike",
      gpu: "RTX 3090 Strix",
      cpu: "i9 12900K",
      ram: "32GB DDR5 6000, Corsair Dominator",
      memory: "6 TB HDD, 4TB SSD - M2",
      cooling: "Water Cooling",
      quantity: 1,
      price: 13000
    },

    {
      id: 123,
      manufacturer: "Intel",
      productName: 'pc',
      imageUrl: "assets/PcParts/PCs/3080ti-pc.png",
      mobo: "Z590 - E Gaming",
      gpu: "RTX 3080 Ti Aorus",
      cpu: "i9 10900KF",
      ram: "32GB DDR4, 4000 G-Skill Trident",
      memory: "4TB HDD, 2TB SSD - M2",
      cooling: "Water Cooling",
      quantity: 1,
      price: 9000
    },

    {
      id: 124,
      manufacturer: "Intel",
      productName: 'pc',
      imageUrl: "assets/PcParts/PCs/3080-pc.png",
      mobo: "Z590 - H Gaming",
      gpu: "RTX 3080 FE",
      cpu: "i7 11700K",
      ram: "32GB DDR4 3600 Corsair Vengeance",
      memory: "2TB HDD, 1TB SSD - M2",
      cooling: "Water Cooling",
      quantity: 1,
      price: 6000
    },

    {
      id: 125,
      manufacturer: "Intel",
      productName: 'pc',
      imageUrl: "assets/PcParts/PCs/3070ti-pc.png",
      mobo: "Z490 - A Gaming",
      gpu: "RTX 3070 Ti Vision",
      cpu: "i5 11500KF",
      ram: "16GB DDR4 3200 Vengeance LPX",
      memory: "2TB HDD, 1TB SSD - M2",
      cooling: "Water Cooling",
      quantity: 1,
      price: 4500
    },

    {
      id: 126,
      manufacturer: "Intel",
      productName: 'pc',
      imageUrl: "assets/PcParts/PCs/3060-pc.png",
      mobo: "Z390 - A Gaming",
      gpu: "RTX 3060 MSI",
      cpu: "i5 10500F",
      ram: "16GB DDR4 3200 G-Skill Ripjaws",
      memory: "1TB HDD, 500GB SSD - SATA",
      cooling: "Wind Cooling",
      quantity: 1,
      price: 3000
    },

    {
      id: 127,
      manufacturer: "AMD",
      productName: 'pc',
      imageUrl: "assets/PcParts/PCs/6900xt-pc.png",
      mobo: "MSI MEG Ace",
      gpu: "Radeon 6900XT",
      cpu: "Ryzen Theadripper 3990X",
      ram: "32GB DDR5 6000 G-Skill Royal",
      memory: "8TB HDD, 4TB SSD - M2",
      cooling: "Water Cooling",
      quantity: 1,
      price: 15000
    },

    {
      id: 128,
      manufacturer: "AMD",
      productName: 'pc',
      imageUrl: "assets/PcParts/PCs/6800xt-pc.png",
      mobo: "Z590 - H Gaming",
      gpu: "Radeon 6800XT",
      cpu: "Ryzen 9 5900X",
      ram: "32 GB DDR5 5600 Crucial Balistix",
      memory: "6TB HDD, 3TB SSD - M2",
      cooling: "Water Cooling",
      quantity: 1,
      price: 10000
    },

    {
      id: 129,
      manufacturer: "AMD",
      productName: 'pc',
      imageUrl: "assets/PcParts/PCs/6700xt-pc.png",
      mobo: "Z490 - E Gaming",
      gpu: "Radeon 6700XT",
      cpu: "Ryzen 7 5800X",
      ram: "16 GB DDR4 4000 TeamGroup",
      memory: "4TB HDD, 2TB SSD - M2",
      cooling: "Water Cooling",
      quantity: 1,
      price: 7000
    },
      
    {
      id: 130,
      manufacturer: "AMD",
      productName: 'pc',
      imageUrl: "assets/PcParts/PCs/6600xt-pc.png",
      mobo: "Z490 - A Gaming",
      gpu: "Radeon 6600XT",
      cpu: "Ryzen 5 5500X",
      ram: "16GB DDR4 3200 Adoto",
      memory: "2TB HDD, 1TB SSD - M2",
      cooling: "Wind Cooling",
      quantity: 1,
      price: 4000
    },

    {
      id: 131,
      manufacturer: "AMD",
      productName: 'pc',
      imageUrl: "assets/PcParts/PCs/rx580-pc.png",
      mobo: "B550 - A Pro",
      gpu: "RX 580 8GB",
      cpu: "Ryzen 5 3600",
      ram: "16GB DDR4 3200 Crucial Balistix",
      memory: "1TB HDD, 500GB SSD - SATA",
      cooling: "Wind Cooling",
      quantity: 1,
      price: 1500
    },

  ];


  constructor() { }

  getPcParts() {
    return this.pcParts;
  }
}