import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { PcPartType } from 'src/app/model';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';
import { WishlistService } from 'src/app/Services/Wishlist/wishlist.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {
  cases!: PcPartType[];

  // For Filters
  defaultCases!: PcPartType[];

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
      // this.cases = data;
      // this.defaultCases = data;

    // Min Price For Slider
    this.cases.forEach(element => {
      this.minArray.push(element.price);
    });
    this.min = Math.min(...this.minArray);

    // Max Price For Slider
    this.max = Math.max(...this.minArray);
  }

  addWishlist(item: any) {
    this.wishlistservice.sendItems(item);
  }

  sendItem(item: PcPartType) {
    this.cartitemservice.sendItems(item)
  }

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
    this.cases = this.cases.filter((element) => element.price <= slider.value);
  };

  // Order By Price
  priceFilter(price: boolean) {
    if (price === true) {
      this.cases.sort((a, b) => { return b.price - a.price });
    } else if (price === false) {
      this.cases.sort((a, b) => { return a.price - b.price });
    };
  };

  // Order By Name
  nameSort(sort: boolean) {
    if (sort === true) {
      this.cases.sort((a: any, b: any) => {
        if (a.name < b.name) {
          return -1
        } else if (a.name > b.name) {
          return 1
        }
        return 0
      });
    } else if (sort === false) {
      this.cases.sort((a: any, b: any) => {
        if (a.name > b.name) {
          return -1
        } else if (a.name < b.name) {
          return 1
        }
        return 0
      })
    }
  }

  // Order By Manufacturer
  nameFilter(index: number) {
    this.resetFilter();
    if (index === 1) {
      this.cases = this.cases.filter((element) => element.manufacturer === "Thermaltake");
    } else if (index === 2) {
      this.cases = this.cases.filter((element) => element.manufacturer === "Corsair");
    } else if (index === 3) {
      this.cases = this.cases.filter((element) => element.manufacturer === "Asus");
    } else if (index === 4) {
      this.cases = this.cases.filter((element) => element.manufacturer === "Anidees");
    } else if (index === 5) {
      this.cases = this.cases.filter((element) => element.manufacturer === "Genesis");
    } else if (index === 6) {
      this.cases = this.cases.filter((element) => element.manufacturer === "Gamemax");
    };
  };

  // Reset Filters
  resetFilter() {
    this.cases = this.defaultCases;
  };

}
