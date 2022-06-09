import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { CpusService, cpusType } from 'src/app/Services/buildservice/cpus.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';
import { WishlistService } from 'src/app/Services/Wishlist/wishlist.service';

@Component({
  selector: 'app-cpus',
  templateUrl: './cpus.component.html',
  styleUrls: ['./cpus.component.scss']
})
export class CpusComponent implements OnInit {
  cpus!: cpusType[];

  // For Filters
  defaultCpus!: cpusType[];

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
    private cpusservice: CpusService,
    private wishlistservice: WishlistService,
    private cartItemService: CartItemService,
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
    this.cpusservice.getCpus().subscribe((data) => {
      this.cpus = data;
      this.defaultCpus = data;
    });

    // Min Price For Slider
    this.cpus.forEach(element => {
      this.minArray.push(element.price);
    });
    this.min = Math.min(...this.minArray);

    // Max Price For Slider
    this.max = Math.max(...this.minArray);
  }

  // Send Cliced Item To Wishlist
  addWishlist(item: any) {
    this.wishlistservice.getItems(item);
  }

  // Send Clicked Item To Cart
  sendToCart(item: cpusType) {
    this.cartItemService.getItems(item);
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
    this.cpus = this.cpus.filter((element) => element.price <= slider.value);
  };

  // Order By Price
  priceFilter(price: boolean) {
    if (price === true) {
      this.cpus.sort((a, b) => { return b.price - a.price });
    } else if (price === false) {
      this.cpus.sort((a, b) => { return a.price - b.price });
    };
  };

  // Order By Name
  nameSort(name: boolean) {
    if (name === true) {
      this.cpus.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        } else if (a.name > b.name) {
          return 1
        }
        return 0
      });
    } else if (name === false) {
      this.cpus.sort((a, b) => {
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
      this.cpus = this.cpus.filter((element) => element.manufacturer === "Intel");
    } else if (index === 2) {
      this.cpus = this.cpus.filter((element) => element.manufacturer === "AMD");
    };
  };

  // Reset Filters
  resetFilter() {
    this.cpus = this.defaultCpus;
  };

}
