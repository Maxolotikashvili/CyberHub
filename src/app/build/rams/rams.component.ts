import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { RamsService, ramsType } from 'src/app/Services/buildservice/rams.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';
import { WishlistService } from 'src/app/Services/Wishlist/wishlist.service';

@Component({
  selector: 'app-rams',
  templateUrl: './rams.component.html',
  styleUrls: ['./rams.component.scss']
})
export class RamsComponent implements OnInit {
  rams!: ramsType[];

  // For Filters
  defaultRams!: ramsType[];

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
    private ramsservice: RamsService,
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
    this.ramsservice.getRams().subscribe((data) => {
      this.rams = data;
      this.defaultRams = data;
    });

    // Min Price For Slider
    this.rams.forEach(element => {
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
  sendToCart(item: ramsType) {
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


  // Price Slider
  sliderValue(slider: any) {
    this.resetFilter();
    this.rams = this.rams.filter((element) => element.price <= slider.value);
  };

   // Order By Price
   priceHigh(price: boolean) {
    if (price === true) {
      this.rams.sort((a, b) => { return b.price - a.price });
    } else if (price === false) {
      this.rams.sort((a, b) => { return a.price - b.price });
    };
  };

  // Order By Name
  nameSort(sort: boolean) {
    if (sort === true) {
      this.rams.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        } else if (a.name > b.name) {
          return 1
        }
        return 0
      });

    } else if (sort === false) {
      this.rams.sort((a, b) => {
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
      this.rams = this.rams.filter((element) => element.manufacturer === "Corsair");
    } else if (index === 2) {
      this.rams = this.rams.filter((element) => element.manufacturer === "Gskill");
    } else if (index === 3) {
      this.rams = this.rams.filter((element) => element.manufacturer === "Crucial");
    } else if (index === 4) {
      this.rams = this.rams.filter((element) => element.manufacturer === "Teamgroup");
    };
  };

  // Order By Memory
  memoryFilter(index: number) {
    this.resetFilter();

    if (index === 1) {
      this.rams = this.rams.filter((element) => element.memory === "16 GB");
    } else if (index === 2) {
      this.rams = this.rams.filter((element) => element.memory === "32 GB");
    } else if (index === 3) {
      this.rams = this.rams.filter((element) => element.memory === "64 GB");
    };
  };

  // Reset Filters
  resetFilter() {
    this.rams = this.defaultRams;
  };
}
