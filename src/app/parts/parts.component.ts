import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PcPartsService } from '../Services/buildservice/pc-parts.service';
import { PcPartType } from '../model';
import { CartItemService } from '../Services/Cart/cart-item.service';
import { WishlistService } from '../Services/Wishlist/wishlist.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit, OnDestroy {
  routerId!: number;
  pcPartName!: string;
  isLoading!: boolean;

  dataSubscription!: Subscription;
  originalData: PcPartType[] = [];
  data: PcPartType[] = [];
  modifiedData: any[] = [];

  slider_min_value: number = 20;
  slider_max_value: number = 50;

  MAT_MENU_ITEMS: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private pcPartsService: PcPartsService,
    private cartItemService: CartItemService,
    private wishListService: WishlistService,
    private snack: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.scrollToTopOnComponentLoad();
    this.catchRouterId();
  }

  //
  scrollToTopOnComponentLoad() {
    window.scrollTo(0, 0);
  }

  //
  catchRouterId() {
    this.route.params.subscribe(params => {
      this.routerId = +params['id'];

      this.determinePcPartName();
      this.downloadApiData();
    });
  }

  //
  determinePcPartName() {
    const partNames: { [key: number]: string } = {
      0: 'mobo', 1: 'gpu', 2: 'cpu', 3: 'ram', 4: 'psu', 5: 'ssd',
      6: 'hdd', 7: 'cpu-cooler', 8: 'case', 9: 'pc', 10: 'keyboard', 11: 'headset'
    };
    this.pcPartName = partNames[this.routerId];
  }

  //
  downloadApiData() {
    this.isLoading = true;

    this.dataSubscription = this.pcPartsService.getPcParts().subscribe({
      next: (data: PcPartType[]) => {
        this.originalData = data.filter((item: PcPartType) => item.productName === this.pcPartName);
        this.data = this.originalData;
        this.modifiedData = this.originalData;

        this.determineSliderValue();
        this.isLoading = false;
      },

      error: (err: HttpErrorResponse) => {
        console.error(err);

        if (err.status === 404) {
          this.displaySnackMessage('404 error', 5000);
        } else {
          this.displaySnackMessage('Error fetching data', 5000);
        }

        this.isLoading = false;
      }
    })
  }

  //
  sendItemToCartOrWishList(item: PcPartType, sendTo: string) {
    if (this.pcPartName !== 'pc') {
      if (sendTo === 'cart') {
        this.isLoading = true;

        this.cartItemService.addItemToCart(item).subscribe({
          next: (response: { message: string, cartLength?: number }) => {
            this.isLoading = false;
            this.snack.open(response.message, 'Dismiss', { duration: 3000 });
            if (response.cartLength) {
              this.cartItemService.changeCartItemLength(response.cartLength);
            }
          },
    
          error: (err: HttpErrorResponse) => {
            console.error(err);
            this.isLoading = false;
            this.snack.open('Error adding item to cart', 'Dismiss', { duration: 3000 });
          }
        });

      } else if (sendTo === 'wishlist') {
        this.isLoading = true;

        this.wishListService.addItemToWishList(item).subscribe({
          next: (response: { message: string, wishListLength?: number }) => {
            this.isLoading =false;

            this.snack.open(response.message, 'Dismiss', { duration: 3000 });
            if (response.wishListLength) {
              this.wishListService.updateWishListLength(response.wishListLength);
            }
          },
    
          error: (err: HttpErrorResponse) => {
            console.error(err);
            this.isLoading = false;
            this.snack.open('Error adding item to wishlist', 'Dismiss', { duration: 3000 });
          }
        });
      }
    }
  }

  //
  displaySnackMessage(message: string, duration: number) {
    this.snack.open(message, 'Dismiss', { duration: duration });
  }

  //
  determineSliderValue() {
    this.slider_min_value = this.data.sort(((a, b) => { return a?.price - b?.price }))[0]?.price;
    this.slider_max_value = this.data.sort(((a, b) => { return b?.price - a?.price }))[0]?.price;
  }

  //
  sortItemsBySliderValue(value: number) {
    this.data = this.originalData;

    this.data = this.data.filter((items: PcPartType) => items.price <= value);
  }

  //
  removeDuplicatesForMatMenu(duplicate: string) {
    let duplicatedArray: string[] = [];

    for (let items of this.modifiedData) {
      duplicatedArray.push(items[duplicate]);
    }

    this.MAT_MENU_ITEMS = duplicatedArray.filter((item, index) => duplicatedArray?.indexOf(item) === index);
  }

  //
  filterItemsByMatMenuItems(items: string | number) {
    this.data = this.originalData;

    this.data = this.data.filter((item) => item.type === items || item.power === items || item.memory === items || item.socket === items || item.efficiency === items);
  }

  //
  sortItemsByParamValue(sortType: string) {
    if (sortType === 'hightolow') {
      this.data.sort(((a, b) => { return b.price - a.price }));
    } else if (sortType === 'lowtohigh') {
      this.data.sort(((a, b) => { return a.price - b.price }));
    } else if (sortType === 'ascending') {
      this.data.sort(function (a, b) {
        if (a.name! < b.name!) {
          return -1;
        }
        if (a.name! > b.name!) {
          return 1;
        }
        return 0;
      });
    } else if (sortType === 'descending') {
      this.data.sort(function (a, b) {
        if (a.name! < b.name!) {
          return 1;
        }
        if (a.name! > b.name!) {
          return -1;
        }
        return 0;
      });
    }
  }

  //
  filterItemsByManufacturer(manufacturer: string) {
    this.data = this.originalData;

    this.data = this.data.filter((parts: PcPartType) => parts.manufacturer === manufacturer);
  }

  //
  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }
}
