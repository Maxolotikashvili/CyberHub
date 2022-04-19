import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { KeyboardsService, keyboardsType } from 'src/app/Services/buildservice/keyboards.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';
import { WishlistService } from 'src/app/Services/Wishlist/wishlist.service';

@Component({
  selector: 'app-keyboards',
  templateUrl: './keyboards.component.html',
  styleUrls: ['./keyboards.component.scss']
})
export class KeyboardsComponent implements OnInit {
  keyboards!: keyboardsType[];
  
  // For Filters
  defaultKeyboards!: keyboardsType[];

  // Filter Variables
  max!: number;
  min!: number;
  minArray: number[] = [];

  // Fontawesome
  eye = faEye;
  heart = faHeart;

  // Spinner
  spinnerboxshow = "spinnerboxshow";
  blur = "blur";

  constructor(
    private keyboardsservice: KeyboardsService,
    private wishlistservice: WishlistService,
    private cartitemservice: CartItemService,
    private snack: MatSnackBar
  ) { }

  ngOnInit(): void {

    // Spinner Timeout
    this.spinnerboxshow = "spinnerboxshow";

    setTimeout(() => {
      this.spinnerboxshow = "spinnerboxhide";
      this.blur = "";
    }, 1500);

    this.keyboardsservice.getKeyboards().subscribe((data) => {
      this.keyboards = data;
      this.defaultKeyboards = data;
    });

    // Min Price For Slider
    this.keyboards.forEach(element => {
      this.minArray.push(element.price);
    });
    this.min = Math.min(...this.minArray);

    // Max Price For Slider
    this.max = Math.max(...this.minArray);
  }

  // Send Clicked Items To Wishlist
  addWishlist(item: any) {
    this.wishlistservice.getItems(item);
  }

  // Send Clicked Items To Cart
  sendToCart(item: keyboardsType) {
    this.cartitemservice.getItems(item)
  }

  // SnackBar
  snackDisplay(message: string, action: any) {
    this.snack.open(message, action, { duration: 3000 })
  }

  wishSnackDisplay(message: string, action: any) {
    this.snack.open(message, action, { duration: 3000 })
  }


  // Filters


  // Order By Alphabet
  nameSort(sort: boolean) {
    if (sort === true) {
      this.keyboards.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        } else if (a.name > b.name) {
          return 1
        }
        return 0
      });

    } else if (sort === false) {
      this.keyboards.sort((a, b) => {
        if (a.name > b.name) {
          return -1
        } else if (a.name < b.name) {
          return 1
        }
        return 0
      })
    }
  }

  // Price Slider
  sliderValue(slider: any) {
    this.resetValue();
    this.keyboards = this.keyboards.filter((element) => element.price <= slider.value);
  }

  // Order By Manufacturer
  filterName(index: number) {
    this.resetValue();

    if (index === 1) {
      this.keyboards = this.keyboards.filter((element) => element.manufacturer === "Steelseries");
    } else if (index === 2) {
      this.keyboards = this.keyboards.filter((element) => element.manufacturer === "HyperX");
    } else if (index === 3) {
      this.keyboards = this.keyboards.filter((element) => element.manufacturer === "Razer");
    } else if (index === 4) {
      this.keyboards = this.keyboards.filter((element) => element.manufacturer === "Asus");
    };
  };

  // Order By Price
  priceHigh(price: boolean) {
    if (price === true) {
      this.keyboards.sort((a, b) => { return b.price - a.price });
    } else if (price === false) {
      this.keyboards.sort((a, b) => { return a.price - b.price });
    }
  }

  switchFilter(type: number) {
    this.resetValue();

    if (type === 1) {
      this.keyboards = this.keyboards.filter((element) => element.switch === "Kalih Silver");
    } else if (type === 2) {
      this.keyboards = this.keyboards.filter((element) => element.switch === "MX Cherry Red");
    } else if (type === 3) {
      this.keyboards = this.keyboards.filter((element) => element.switch === "Blue")
    }
  };

  // Reset Filters
  resetValue() {
    this.keyboards = this.defaultKeyboards;
  }  
}
