import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { MobosService, mobosType } from 'src/app/Services/buildservice/mobos.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';
import { WishlistService } from 'src/app/Services/Wishlist/wishlist.service';

@Component({
  selector: 'app-mobos',
  templateUrl: './mobos.component.html',
  styleUrls: ['./mobos.component.scss']
})
export class MobosComponent implements OnInit {
  mobos!: mobosType[];

  // For Filters
  defaultMobos!: mobosType[];

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
    private mobosservice: MobosService,
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
    this.mobosservice.getMobos().subscribe((data) => {
      this.mobos = data;
      this.defaultMobos = data;
    });

    // Min Price For Slider
    this.mobos.forEach(element => {
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
  sendToCart(item: mobosType) {
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
    this.mobos = this.mobos.filter((element) => element.price <= slider.value);
  };

  // Order By Price
  priceFilter(price: boolean) {
    if (price === true) {
      this.mobos.sort((a, b) => { return b.price - a.price });
    } else if (price === false) {
      this.mobos.sort((a, b) => { return a.price - b.price });
    };
  };

  // Order By Name
  nameSort(sort: boolean) {
    if (sort === true) {
      this.mobos.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        } else if (a.name > b.name) {
          return 1
        }
        return 0
      });

    } else if (sort === false) {
      this.mobos.sort((a, b) => {
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
  filterName(index: number) {
    this.resetFilter();

    if (index === 1) {
      this.mobos = this.mobos.filter((element) => element.manufacturer === "MSI");
    } else if (index === 2) {
      this.mobos = this.mobos.filter((element) => element.manufacturer === "Asus");
    } else if (index === 3) {
      this.mobos = this.mobos.filter((element) => element.manufacturer === "Gigabyte");
    };
  };

  // Filter By Socket
  socketFilter(socket: number) {
    this.resetFilter();

    if (socket === 1) {
      this.mobos = this.mobos.filter((element) => element.socket === "LGA 1700");
    } else if (socket === 2) {
      this.mobos = this.mobos.filter((element) => element.socket === "LGA 1200");
    } else if (socket === 3) {
      this.mobos = this.mobos.filter((element) => element.socket === "LGA 1151");
    };
  };

  // Reset Filters
  resetFilter() {
    this.mobos = this.defaultMobos;
  }
}
