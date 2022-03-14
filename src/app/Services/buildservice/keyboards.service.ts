import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface keyboardsType {
  keyboardId: number,
  manufacturer: string,
  imageUrl: string,
  name: string,
  price: string
}

@Injectable({
  providedIn: 'root'
})
export class KeyboardsService {
  keyboards: keyboardsType[] = [
    {
      keyboardId: 1,
      manufacturer: "HyperX",
      imageUrl: "/assets/PcParts/Keyboards/elite2.png",
      name: "HyperX Alloy Elite 2",
      price: "279.99$"
    },

    {
      keyboardId: 2,
      manufacturer: "HyperX",
      imageUrl: "/assets/PcParts/Keyboards/fps.png",
      name: "HyperX Alloy FPS",
      price: "189.99$"
    },

    {
      keyboardId: 3,
      manufacturer: "HyperX",
      imageUrl: "/assets/PcParts/Keyboards/origins.png",
      name: "HyperX Alloy Origins",
      price: "109.99$"
    },

    {
      keyboardId: 4,
      manufacturer: "Razer",
      imageUrl: "/assets/PcParts/Keyboards/razer-blackwidowv3green.png",
      name: "Razer Blackwidow 3",
      price: "189.99"
    },

    {
      keyboardId: 5,
      manufacturer: "Asus",
      imageUrl: "/assets/PcParts/Keyboards/Rog-claymore.png",
      name: "Asus Rog Claymore",
      price: "219.99$"
    },
  ];

  constructor() { }

  getKeyboards() {
    return of(this.keyboards);
  }
}
