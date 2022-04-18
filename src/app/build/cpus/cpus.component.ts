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

  // Default Value Of Products For Filters
  defaultCpus!: cpusType[];

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
    private cpusservice: CpusService,
    private wishlistservice: WishlistService,
    private cartItemService: CartItemService,
    private snack: MatSnackBar
  ) { }

  ngOnInit(): void {

    // Spinner Timeout
    this.spinnerboxshow = "spinnerboxshow";

    setTimeout(() => {
      this.spinnerboxshow = "spinnerboxhide";
      this.blur = "";
    }, 1500);

    // Get CPU-s
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
    this.cartItemService.getItems(item)
  }

  // SnackBar
  snackDisplay(message: string, action: any) {
    this.snack.open(message, action, { duration: 3000 })
  }

  wishSnackDisplay(message: string, action: any) {
    this.snack.open(message, action, { duration: 3000 })
  }

  
  // Filters



  // Sort Products By Name Ascending
  nameAscend() {
    this.cpus.sort((a, b) => {
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
    this.cpus.sort((a, b) => {
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
    this.cpus = this.cpus.filter((element) => element.price <= slider.value);
  }

  // Reset Filters
  resetValue() {
    this.cpus = this.defaultCpus;
  }

  // Filter Intel Manufacturers
  filterIntel() {
    this.resetValue();
    this.cpus = this.cpus.filter((element) => element.manufacturer === "Intel");
  }

  // Filter AMD Manufacturers
  filterAmd() {
    this.resetValue();
    this.cpus = this.cpus.filter((element) => element.manufacturer === "AMD")
  }

  // Order Products From High To Low Prices
  priceHigh() {
    this.cpus.sort((a, b) => { return b.price - a.price })
  }

  // Order Products From Low To High Prices
  priceLow() {
    this.cpus.sort((a, b) => { return a.price - b.price })
  }

}
