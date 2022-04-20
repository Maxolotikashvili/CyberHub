import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { coolersType, CpuCoolersService } from 'src/app/Services/buildservice/cpu-coolers.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';
import { WishlistService } from 'src/app/Services/Wishlist/wishlist.service';

@Component({
  selector: 'app-cpu-coolers',
  templateUrl: './cpu-coolers.component.html',
  styleUrls: ['./cpu-coolers.component.scss']
})
export class CpuCoolersComponent implements OnInit {
  coolers!: coolersType[];

  // For Filters
  defaultCoolers!: coolersType[];

  // Variables For Filtering Price
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
    private coolersservice: CpuCoolersService,
    private wishlistservice: WishlistService,
    private cartitemservice: CartItemService,
    private snack: MatSnackBar
  ) { }

  ngOnInit(): void {

    // Scroll Up
    window.scrollTo(0, 0);

    // Spinner Timeout
    this.spinnerboxshow = "spinnerboxshow";

    setTimeout(() => {
      this.spinnerboxshow = "spinnerboxhide";
      this.blur = "";
    }, 1500);

    // Get Items
    this.coolersservice.getCoolers().subscribe((data) => {
      this.coolers = data;
      this.defaultCoolers = data;
    })

    // Min Price For Slider
    this.coolers.forEach(element => {
      this.minArray.push(element.price);
    });
    this.min = Math.min(...this.minArray);

    // Max Price For Slider
    this.max = Math.max(...this.minArray);
  }

  // Send Clicked Item To Wishlist
  addWishlist(item: any) {
    this.wishlistservice.getItems(item);
  }

  // Send Clicked Item To Cart
  sendToCart(item: coolersType) {
    this.cartitemservice.getItems(item)
  }

  // SnackBar
  snackDisplay(message: string, action: any) {
    this.snack.open(message, action, { duration: 3000 })
  }

  wishSnackDisplay(message: string, action: any) {
    this.snack.open(message, action, { duration: 3000 })
  }


  // Filter

  // Price Slider
  sliderValue(slider: any) {
    this.resetFilter();

    this.coolers = this.coolers.filter((element) => element.price <= slider.value);
  };

  // Order By Price
  priceFilter(price: boolean) {
    if (price === true) {
      this.coolers.sort((a, b) => { return b.price - a.price });
    } else if (price === false) {
      this.coolers.sort((a, b) => { return a.price - b.price });
    };
  };


  // Order By Alphabet
  nameSort(sort: boolean) {
    if (sort === true) {
      this.coolers.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        } else if (a.name > b.name) {
          return 1
        }
        return 0
      });

    } else if (sort === false) {
      this.coolers.sort((a, b) => {
        if (a.name > b.name) {
          return -1
        } else if (a.name < b.name) {
          return 1
        }
        return 0
      });
    };
  };

  // Order By Manufacturer
  nameFilter(index: number) {
    this.resetFilter();

    if (index === 1) {
      this.coolers = this.coolers.filter((element) => element.manufacturer === "Corsair");
    } else if (index === 2) {
      this.coolers = this.coolers.filter((element) => element.manufacturer === "NZXT");
    } else if (index === 3) {
      this.coolers = this.coolers.filter((element) => element.manufacturer === "Asus");
    } else if (index === 4) {
      this.coolers = this.coolers.filter((element) => element.manufacturer === "DeepCool");
    } else if (index === 5) {
      this.coolers = this.coolers.filter((element) => element.manufacturer === "Thermaltake");
    } else if (index === 6) {
      this.coolers = this.coolers.filter((element) => element.manufacturer === "Cooler Master");
    } else if (index === 7) {
      this.coolers = this.coolers.filter((element) => element.manufacturer === "Zalman");
    };
  };

  // Order By Type
  typeFilter(type: boolean) {
    this.resetFilter();

    if (type === true) {
      this.coolers = this.coolers.filter((element) => element.type === "Liquid");
    } else if (type === false) {
      this.coolers = this.coolers.filter((element) => element.type === "Wind");
    };
  };

  // Reset Filters
  resetFilter() {
    this.coolers = this.defaultCoolers;
  };
}
