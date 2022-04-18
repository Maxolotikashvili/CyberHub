import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { CasesService, casesType } from 'src/app/Services/buildservice/cases.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';
import { WishlistService } from 'src/app/Services/Wishlist/wishlist.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {
  cases!: casesType[];

  // For Filters
  defaultCases!: casesType[];

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
    private casesservice: CasesService,
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

    this.casesservice.getCases().subscribe((data) => {
      this.cases = data;
      this.defaultCases = data;
    });


    // Min Price For Slider
    this.cases.forEach(element => {
      this.minArray.push(element.price);
    });
    this.min = Math.min(...this.minArray);

    // Max Price For Slider
    this.max = Math.max(...this.minArray);
  }

  addWishlist(item: any) {
    this.wishlistservice.getItems(item);
  }

  sendItem(item: casesType) {
    this.cartitemservice.getItems(item)
  }

  snackDisplay(message: string, action: any) {
    this.snack.open(message, action, { duration: 3000 })
  }

  wishSnackDisplay(message: string, action: any) {
    this.snack.open(message, action, { duration: 3000 })
  }


  // Filters


  // Sort Products By Name Ascending
  nameAscend() {
    this.cases.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      } else if (a.name > b.name) {
        return 1
      }
      return 0
    });
  }

  // Sort Products By Name Descending
  nameDescend() {
    this.cases.sort((a, b) => {
      if (a.name > b.name) {
        return -1
      } else if (a.name < b.name) {
        return 1
      }
      return 0
    })
  }

  // Price Slider
  sliderValue(slider: any) {
    this.resetValue();
    this.cases = this.cases.filter((element) => element.price <= slider.value);
  }

  // Reset Filters
  resetValue() {
    this.cases = this.defaultCases;
  }

  // Filter Intel Manufacturers
  filterIntel() {
    this.resetValue();
    this.cases = this.cases.filter((element) => element.manufacturer === "Intel");
  }

  filterName(some: any) {
    console.log(some)
  }


  // Filter AMD Manufacturers
  filterAmd() {
    this.resetValue();
    this.cases = this.cases.filter((element) => element.manufacturer === "AMD")
  }

  // Order Products From High To Low Prices
  priceHigh() {
    this.cases.sort((a, b) => { return b.price - a.price })
  }

  // Order Products From Low To High Prices
  priceLow() {
    this.cases.sort((a, b) => { return a.price - b.price })
  }

}
