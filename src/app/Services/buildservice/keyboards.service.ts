import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface keyboardsType {
  id: number,
  keyboardId: number,
  manufacturer: string,
  imageUrl: string,
  name: string,
  quantity: number,
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class KeyboardsService {
  keyboards: keyboardsType[] = [
    {
      id: 77,
      keyboardId: 1,
      manufacturer: "HyperX",
      imageUrl: "/assets/PcParts/Keyboards/elite2.png",
      name: "HyperX Alloy Elite 2",
      quantity: 1,
      price: 279.99
    },

    {
      id: 78,
      keyboardId: 2,
      manufacturer: "HyperX",
      imageUrl: "/assets/PcParts/Keyboards/fps.png",
      name: "HyperX Alloy FPS",
      quantity: 1,
      price: 189.99
    },

    {
      id: 79,
      keyboardId: 3,
      manufacturer: "HyperX",
      imageUrl: "/assets/PcParts/Keyboards/origins.png",
      name: "HyperX Alloy Origins",
      quantity: 1,
      price: 109.99
    },

    {
      id: 80,
      keyboardId: 4,
      manufacturer: "Razer",
      imageUrl: "/assets/PcParts/Keyboards/razer-blackwidowv3green.png",
      name: "Razer Blackwidow 3",
      quantity: 1,
      price: 189.99
    },

    {
      id: 81,
      keyboardId: 5,
      manufacturer: "Asus",
      imageUrl: "/assets/PcParts/Keyboards/Rog-claymore.png",
      name: "Asus Rog Claymore",
      quantity: 1,
      price: 219.99
    },
  ];

  constructor() { }

  getKeyboards() {
    return of(this.keyboards);
  }
}
