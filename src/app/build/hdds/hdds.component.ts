import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { HddsService, hddsType } from 'src/app/Services/buildservice/hdds.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';
import { WishlistService } from 'src/app/Services/Wishlist/wishlist.service';

@Component({
  selector: 'app-hdds',
  templateUrl: './hdds.component.html',
  styleUrls: ['./hdds.component.scss']
})
export class HddsComponent implements OnInit {
  hdds!: hddsType[];

  // For Filters
  defaultHdds!: hddsType[];

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
    private hddservice: HddsService,
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

    this.hddservice.getHdds().subscribe((data) => {
      this.hdds = data;
      this.defaultHdds = data;
    });

    // Min Price For Slider
    this.hdds.forEach(element => {
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
  sendToCart(item: hddsType) {
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
    this.resetValue();
    this.hdds = this.hdds.filter((element) => element.price <= slider.value);
  };

  // Order By Price
  priceHigh(price: boolean) {
    if (price === true) {
      this.hdds.sort((a, b) => { return b.price - a.price });
    } else if (price === false) {
      this.hdds.sort((a, b) => { return a.price - b.price });
    }
  };

  // Order By Name
  nameSort(sort: boolean) {
    if (sort === true) {
      this.hdds.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        } else if (a.name > b.name) {
          return 1
        }
        return 0
      });

    } else if (sort === false) {
      this.hdds.sort((a, b) => {
        if (a.name > b.name) {
          return -1
        } else if (a.name < b.name) {
          return 1
        }
        return 0
      })
    }
  };

  // Order By Manufacturer
  nameFilter(index: number) {
    this.resetValue();

    if (index === 1) {
      this.hdds = this.hdds.filter((element) => element.manufacturer === "Seagate");
    } else if (index === 2) {
      this.hdds = this.hdds.filter((element) => element.manufacturer === "Western Digital");
    };
  };

  // Order By Memory
  memoryFilter(index: number) {
    this.resetValue();

    if (index === 1) {
      this.hdds = this.hdds.filter((element) => element.memory === "6 TB");
    } else if (index === 2) {
      this.hdds = this.hdds.filter((element) => element.memory === "2 TB");
    } else if (index === 3) {
      this.hdds = this.hdds.filter((element) => element.memory === "1 TB");
    }
  };

  // Reset Filters
  resetValue() {
    this.hdds = this.defaultHdds;
  };
}
