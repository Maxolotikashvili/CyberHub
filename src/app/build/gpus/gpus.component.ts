import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { GpusService, gpusType } from 'src/app/Services/buildservice/gpus.service';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';
import { WishlistService } from 'src/app/Services/Wishlist/wishlist.service';

@Component({
  selector: 'app-gpus',
  templateUrl: './gpus.component.html',
  styleUrls: ['./gpus.component.scss']
})
export class GpusComponent implements OnInit {
  gpus!: gpusType[];

  // For Filters
  defaultGpus!: gpusType[];

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
    private gpusservice: GpusService,
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

    // Get Gpus 
    this.gpusservice.getGpus().subscribe((data: gpusType[]) => {
      this.gpus = data;
      this.defaultGpus = data;
    });

    // Min Price For Slider
    this.gpus.forEach(element => {
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
  sendToCart(item: gpusType) {
    this.cartitemservice.getItems(item)
  }

  // SnackBar
  snackDisplay(message: string, action: any) {
    this.snack.open(message, action, { duration: 3000 })
  }

  wishSnackDisplay(message: string, action: any) {
    this.snack.open(message, action, { duration: 3000 })
  }


  // Filter


  // Order By Alphabet
  nameSort(sort: boolean) {
    if (sort === true) {
      this.gpus.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        } else if (a.name > b.name) {
          return 1
        }
        return 0
      });

    } else if (sort === false) {
      this.gpus.sort((a, b) => {
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
    this.gpus = this.gpus.filter((element) => element.price <= slider.value);
  }

  // Order By Manufacturer
  filterName(index: number) {
    this.resetValue();

    if (index === 1) {
      this.gpus = this.gpus.filter((element) => element.manufacturer === "Asus");
    } else if (index === 2) {
      this.gpus = this.gpus.filter((element) => element.manufacturer === "Gigabyte");
    } else if (index === 3) {
      this.gpus = this.gpus.filter((element) => element.manufacturer === "MSI");
    } else if (index === 4) {
      this.gpus = this.gpus.filter((element) => element.manufacturer === "Nvidia");
    };
  };

  // Order By Price
  priceHigh(price: boolean) {
    if (price === true) {
      this.gpus.sort((a, b) => { return b.price - a.price });
    } else if (price === false) {
      this.gpus.sort((a, b) => { return a.price - b.price });
    }
  }

  // Reset Filters
  resetValue() {
    this.gpus = this.defaultGpus;
  }
}
