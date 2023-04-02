import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { PsusType } from 'src/app/model';
import { PsusService } from 'src/app/Services/buildservice/psus.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';
import { WishlistService } from 'src/app/Services/Wishlist/wishlist.service';

@Component({
  selector: 'app-psus',
  templateUrl: './psus.component.html',
  styleUrls: ['./psus.component.scss']
})
export class PsusComponent implements OnInit {
  psus!: PsusType[];

  // For Filters
  defaultPsus!: PsusType[];

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

    // Scroll Up
    window.scrollTo(0, 0);

    // Spinner Timeout
    this.spinnerboxshow = "spinnerboxshow";

    setTimeout(() => {
      this.spinnerboxshow = "spinnerboxhide";
      this.blur = "";
    }, 1500);

    // Get Items
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
    this.wishlistservice.sendItems(item);
  }

  // Send Clicked Items To Cart
  sendToCart(item: PsusType) {
    this.cartitemservice.sendItems(item)
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
    this.psus = this.psus.filter((element) => element.price <= slider.value);
  };

  // Order By Price
  priceFilter(price: boolean) {
    if (price === true) {
      this.psus.sort((a, b) => { return b.price - a.price });
    } else if (price === false) {
      this.psus.sort((a, b) => { return a.price - b.price });
    };
  };

  // Order By Name
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
      });
    };
  };

  // Order By Manufacturer
  nameFilter(index: number) {
    this.resetFilter();

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

  // Filter By Power
  powerFilter(index: number) {
    this.resetFilter();

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
    this.resetFilter();

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
  resetFilter() {
    this.psus = this.defaultPsus;
  }
}
