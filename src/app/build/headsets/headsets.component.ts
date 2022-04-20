import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { HeadsetsService, headsetsType } from 'src/app/Services/buildservice/headsets.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';
import { WishlistService } from 'src/app/Services/Wishlist/wishlist.service';

@Component({
  selector: 'app-headsets',
  templateUrl: './headsets.component.html',
  styleUrls: ['./headsets.component.scss']
})
export class HeadsetsComponent implements OnInit {
  headsets!: headsetsType[];

  // For Filters
  defaultHeadsets!: headsetsType[];

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
    private headsetsservice: HeadsetsService,
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
    this.headsetsservice.getHeadsets().subscribe((data) => {
      this.headsets = data;
      this.defaultHeadsets = data;
    });

    // Min Price For Slider
    this.headsets.forEach(element => {
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
  sendToCart(item: headsetsType) {
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
      this.headsets.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        } else if (a.name > b.name) {
          return 1
        }
        return 0
      });

    } else if (sort === false) {
      this.headsets.sort((a, b) => {
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
    this.resetFilter();
    this.headsets = this.headsets.filter((element) => element.price <= slider.value);
  }

  // Order By Price
  priceFilter(price: boolean) {
    if (price === true) {
      this.headsets.sort((a, b) => { return b.price - a.price });
    } else if (price === false) {
      this.headsets.sort((a, b) => { return a.price - b.price });
    };
  };

  // Order By Manufacturer
  nameFilter(index: number) {
    this.resetFilter();

    if (index === 1) {
      this.headsets = this.headsets.filter((element) => element.manufacturer === "Steelseries");
    } else if (index === 2) {
      this.headsets = this.headsets.filter((element) => element.manufacturer === "HyperX");
    } else if (index === 3) {
      this.headsets = this.headsets.filter((element) => element.manufacturer === "Razer");
    } else if (index === 4) {
      this.headsets = this.headsets.filter((element) => element.manufacturer === "Asus");
    };
  };

  // Order By Type
  typeFilter(wireless: boolean) {
    this.resetFilter();

    if (wireless === true) {
      this.headsets = this.headsets.filter((element) => element.wireless === true);
    } else if (wireless === false) {
      this.headsets = this.headsets.filter((element) => element.wireless === false);
    };
  };

  // Reset Filters
  resetFilter() {
    this.headsets = this.defaultHeadsets;
  };
}
