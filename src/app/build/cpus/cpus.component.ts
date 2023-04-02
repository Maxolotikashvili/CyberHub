import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { CartItemService } from 'src/app/Services/Cart/cart-item.service';
import { WishlistService } from 'src/app/Services/Wishlist/wishlist.service';
import { PcPartType } from 'src/app/model';

@Component({
  selector: 'app-cpus',
  templateUrl: './cpus.component.html',
  styleUrls: ['./cpus.component.scss']
})
export class CpusComponent implements OnInit {
  pcPartName!: string;
  defaultData!: PcPartType[];
  mutableData!: PcPartType[];

  routerId!: number;

  // Filter Variables
  max!: number;
  min!: number;
  minArray: number[] = [];

  fontawesome = {
    eye: faEye,
    heart: faHeart
  }

  constructor(
    private route: ActivatedRoute,
    private wishlistservice: WishlistService,
    private cartItemService: CartItemService,
    private snack: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.catchRouterId();
    this.scrollToTopOnComponentLoad();
    this.downloadData();
    this.setMinAndMaxPriceForSlider();
  }

  //
  catchRouterId() {
    this.routerId = +this.route.snapshot.paramMap.get('id')!;

    if (this.routerId === 0) {
      this.pcPartName = 'mobos';
    } else if (this.routerId === 1) {
      this.pcPartName = 'gpus'
    } else if (this.routerId === 2) {
      this.pcPartName = 'cpus';
    } else if (this.routerId === 3) {
      this.pcPartName = 'rams';
    } else if (this.routerId === 4) {
      this.pcPartName = 'psus';
    } else if (this.routerId === 5) {
      this.pcPartName = 'ssds';
    } else if (this.routerId === 6) {
      this.pcPartName = 'hdds';
    } else if (this.routerId === 7) {
      this.pcPartName = 'cpu-coolers';
    } else if (this.routerId === 8) {
      this.pcPartName = 'cases';
    } else if (this.routerId === 9) {
      this.pcPartName = 'pcs';
    }
  }

  //
  scrollToTopOnComponentLoad() {
    window.scrollTo(0, 0)
  }

  //
  downloadData() {
    
  }

  setMinAndMaxPriceForSlider() { 
    for (let item of this.mutableData) {
      this.minArray.push(item.price)
    }

    this.min = Math.min(...this.minArray);
    this.max = Math.max(...this.minArray);
  }

  addWishlist(item: PcPartType) {
    this.wishlistservice.sendItems(item);
  }

  sendItemToCart(item: PcPartType) {
    this.cartItemService.sendItems(item);
  }

  displayMessage(message: string, action: string) {
    this.snack.open(message, action, { duration: 3000 })
  }

  // Filters

  sortItemsBySliderValue(slider: any) {
    this.resetAllFilters();
    this.mutableData = this.mutableData.filter((element) => element.price <= slider.value);
  };

  sortItemsByPrice(price: boolean) {
    if (price === true) {
      this.mutableData.sort((a, b) => { return b.price - a.price });
    } else if (price === false) {
      this.mutableData.sort((a, b) => { return a.price - b.price });
    };
  };

  sortItemsByName(name: boolean) {
    if (name === true) {
      this.mutableData.sort((a: any, b: any) => {
        if (a.name < b.name) {
          return -1
        } else if (a.name > b.name) {
          return 1
        }
        return 0
      });
    } else if (name === false) {
      this.mutableData.sort((a: any, b: any) => {
        if (a.name > b.name) {
          return -1
        } else if (a.name < b.name) {
          return 1
        }
        return 0
      });
    };
  };

  sortItemsByManufacturer(index: number) {
    this.resetAllFilters();

    if (index === 1) {
      this.mutableData = this.mutableData.filter((element: PcPartType) => element.manufacturer === "Intel");
    } else if (index === 2) {
      this.mutableData = this.mutableData.filter((element: PcPartType) => element.manufacturer === "AMD");
    };
  };

  resetAllFilters() {
    this.mutableData = this.defaultData;
  };

}
