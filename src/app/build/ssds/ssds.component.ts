import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { SsdsService, ssdsType } from 'src/app/Services/buildservice/ssds.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';
import { WishlistService } from 'src/app/Services/Wishlist/wishlist.service';

@Component({
  selector: 'app-ssds',
  templateUrl: './ssds.component.html',
  styleUrls: ['./ssds.component.scss']
})
export class SsdsComponent implements OnInit {
  ssds!: ssdsType[];

  // For Filters
  defaultSsds!: ssdsType[];

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
    private ssdsservice: SsdsService,
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
    this.ssdsservice.getSsds().subscribe((data) => {
      this.ssds = data;
      this.defaultSsds = data;
    });

    // Min Price For Slider
    this.ssds.forEach(element => {
      this.minArray.push(element.price);
    });
    this.min = Math.min(...this.minArray);

    // Max Price For Slider
    this.max = Math.max(...this.minArray);
  }

  // Send Clicked Items To Wishlist
  addWishlist(item: any) {
    this.wishlistservice.getItems(item);
  };

  // Send Clicked Items To Cart
  sendToCart(item: ssdsType) {
    this.cartitemservice.getItems(item)
  };

  // SnackBar
  snackDisplay(message: string, action: any) {
    this.snack.open(message, action, { duration: 3000 })
  };

  wishSnackDisplay(message: string, action: any) {
    this.snack.open(message, action, { duration: 3000 })
  };


  // Filters


  // Price Slider
  sliderValue(slider: any) {
    this.resetFilter();
    this.ssds = this.ssds.filter((element) => element.price <= slider.value);
  };

  // Order By Price
  priceFilter(price: boolean) {
    if (price === true) {
      this.ssds.sort((a, b) => { return b.price - a.price });
    } else if (price === false) {
      this.ssds.sort((a, b) => { return a.price - b.price });
    };
  };

  // Order By Name
  nameSort(sort: boolean) {
    if (sort === true) {
      this.ssds.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        } else if (a.name > b.name) {
          return 1
        }
        return 0
      });

    } else if (sort === false) {
      this.ssds.sort((a, b) => {
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
      this.ssds = this.ssds.filter((element) => element.manufacturer === "Seagate");
    } else if (index === 2) {
      this.ssds = this.ssds.filter((element) => element.manufacturer === "Samsung");
    } else if (index === 3) {
      this.ssds = this.ssds.filter((element) => element.manufacturer === "Western Digital");
    };
  };

  // Order By Memory
  memoryFilter(index: number) {
    this.resetFilter();

    if (index === 1) {
      this.ssds = this.ssds.filter((element) => element.memory === "2 TB");
    } else if (index === 2) {
      this.ssds = this.ssds.filter((element) => element.memory === "1 TB");
    } else if (index === 3) {
      this.ssds = this.ssds.filter((element) => element.memory === "500 GB");
    } else if (index === 4) {
      this.ssds = this.ssds.filter((element) => element.memory === "250 GB");
    };
  };

  // Reset Filters
  resetFilter() {
    this.ssds = this.defaultSsds;
  };
}
