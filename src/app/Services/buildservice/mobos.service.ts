import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface mobosType {
  moboId: number,
  manufacturer: String,
  imageUrl: string,
  name: string,
  quantity: number,
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class MobosService {
  
  mobos: mobosType[] = [
    {
      moboId: 1,
      manufacturer: "MSI",
      imageUrl:  "assets/PcParts/MOBOs/Msi-meggodlike.png",
      name: "MSI MEG Godlike",
      quantity: 1,
      price: 1799.99
    },

    {
      moboId: 2,
      manufacturer: "MSI",
      imageUrl: "assets/PcParts/MOBOs/Msi-megace.png",
      name: "MSI Meg Ace",
      quantity: 1,
      price: 1199.99
    },

    {
      moboId: 3,
      manufacturer: "Asus",
      imageUrl: "/assets/PcParts/MOBOs/rog-maximus12hero.png",
      name: "Asus ROG Maximus 12 Hero",
      quantity: 1,
      price: 1099.99
    },

    {
      moboId: 4,
      manufacturer: "Asus",
      imageUrl: "/assets/PcParts/MOBOs/rog-maximus11wifi.png",
      name: "Asus ROG Maximus 11 Hero",
      quantity: 1,
      price: 899.99
    },

    {
      moboId: 5,
      manufacturer: "Asus",
      imageUrl: "assets/PcParts/MOBOs/Strix-z490egaming.png",
      name: "Asus ROG Z490 - E Gaming",
      quantity: 1,
      price: 599.99
    },

    {
      moboId: 6,
      manufacturer: "Asus",
      imageUrl: "assets/PcParts/MOBOs/strix-z490hgaming.png",
      name: "Asus ROG Z490 - H Gaming",
      quantity: 1,
      price: 369.99
    },

    {
      moboId: 7,
      manufacturer: "Gigabyte",
      imageUrl: "assets/PcParts/MOBOs/Gigabyte-z690master.png",
      name: "Gigabyte Z690 Aorus Master",
      quantity: 1,
      price: 479.99
    },

    {
      moboId: 8,
      manufacturer: "Gigabyte",
      imageUrl: "assets/PcParts/MOBOs/z590aoruselite.png",
      name: "Gigabyte Z590 Aorus Elite",
      quantity: 1,
      price: 499.99
    },

    {
      moboId: 9,
      manufacturer: "Gigabyte",
      imageUrl: "assets/PcParts/MOBOs/z390aorusprowifi.png",
      name: "Gigabyte Z390 Aorus Pro",
      quantity: 1,
      price: 399.99
    }
  ]

  constructor() { }

  getMobos() {
    return of(this.mobos)
  }

}
