import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { PsusService, psusType } from 'src/app/Services/buildservice/psus.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';
import { WishlistService } from 'src/app/Services/Wishlist/wishlist.service';

@Component({
  selector: 'app-psus',
  templateUrl: './psus.component.html',
  styleUrls: ['./psus.component.scss']
})
export class PsusComponent implements OnInit {
  psus!: psusType[];

  // For Filters
  defaultPsus!: psusType[];

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
    private psuservice: PsusService,
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

    this.psuservice.getPsus().subscribe((data) => {
      this.psus = data;
      this.defaultPsus = data;
    });

    // Min Price For Slider
    this.psus.forEach(element => {
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
  sendToCart(item: psusType) {
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
      this.psus.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        } else if (a.name > b.name) {
          return 1
        }
        return 0
      });

    } else if (sort === false) {
      this.psus.sort((a, b) => {
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
    this.psus = this.psus.filter((element) => element.price <= slider.value);
  }

  // Order By Manufacturer
  filterName(index: number) {
    this.resetValue();

    if (index === 1) {
      this.psus = this.psus.filter((element) => element.manufacturer === "Be Quet!");
    } else if (index === 2) {
      this.psus = this.psus.filter((element) => element.manufacturer === "Evga");
    } else if (index === 3) {
      this.psus = this.psus.filter((element) => element.manufacturer === "Thermaltake");
    } else if (index === 4) {
      this.psus = this.psus.filter((element) => element.manufacturer === "DeepCool");
    };
  };

  // Order By Price
  priceHigh(price: boolean) {
    if (price === true) {
      this.psus.sort((a, b) => { return b.price - a.price });
    } else if (price === false) {
      this.psus.sort((a, b) => { return a.price - b.price });
    }
  };

  // Filter By Power
  powerFilter(index: number) {
    this.resetValue();

    if (index === 1) {
      this.psus = this.psus.filter((element) => element.power <= 500);
    } else if (index === 2) {
      this.psus = this.psus.filter((element) => element.power > 500 && element.power <= 850);
    } else if (index === 3) {
      this.psus = this.psus.filter((element) => element.power > 850 && element.power <= 1200);
    } else if (index === 4) {
      this.psus = this.psus.filter((element) => element.power > 1200 && element.power <= 1500);
    }
  }

  // Filter By Efficiency
  efficiencyFilter(efficiency: number) {
    this.resetValue();

    if (efficiency === 1) {
      this.psus = this.psus.filter((element) => element.efficiency === "80+ Titanium");
    } else if (efficiency === 2) {
      this.psus = this.psus.filter((element) => element.efficiency === "80+ Platinum");
    } else if (efficiency === 3) {
      this.psus = this.psus.filter((element) => element.efficiency === "80+ Gold");
    } else if (efficiency === 4) {
      this.psus = this.psus.filter((element) => element.efficiency === "80+ Bronze");
    };
  };

  // Reset Filters
  resetValue() {
    this.psus = this.defaultPsus;
  }
}
