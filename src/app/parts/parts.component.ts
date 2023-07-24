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
  
  dataSubscription!: Subscription;
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
    if (this.routerId === 0) {
      this.pcPartName = 'mobo';
    } else if (this.routerId === 1) {
      this.pcPartName = 'gpu';
    } else if (this.routerId === 2) {
      this.pcPartName = 'cpu';
    } else if (this.routerId === 3) {
      this.pcPartName = 'ram';
    } else if (this.routerId === 4) {
      this.pcPartName = 'psu';
    } else if (this.routerId === 5) {
      this.pcPartName = 'ssd';
    } else if (this.routerId === 6) {
      this.pcPartName = 'hdd';
    } else if (this.routerId === 7) {
      this.pcPartName = 'cpu-cooler';
    } else if (this.routerId === 8) {
      this.pcPartName = 'case';
    } else if (this.routerId === 9) {
      this.pcPartName = 'pc';
    } else if (this.routerId === 10) {
      this.pcPartName = 'keyboard';
    } else if (this.routerId === 11) {
      this.pcPartName = 'headset';
    };
  }

  //
  async downloadApiData() {
    this.dataSubscription = this.pcPartsService.getPcParts().subscribe({
      next: (data: PcPartType[]) => {
        this.data = data.filter((item: PcPartType) => item.productName === this.pcPartName);
        this.modifiedData = data.filter((item: PcPartType) => item.productName === this.pcPartName);
        this.determineSliderValue();
      },

      error: (err: HttpErrorResponse) => {
        console.log('Error fetching data:', err);

        if (err.status === 404) {
          this.displaySnackMessage('Error 404', 5000);
          return;
        }
        
        this.displaySnackMessage(err.message, 5000);
      }
    })
  }

  //
  async sendItemToCartOrWishList(item: PcPartType, sendTo: string) {
    if (this.pcPartName !== 'pc') {
      if (sendTo === 'cart') {
        this.cartItemService.sendItems(item);
      } else if (sendTo === 'wishlist') {
        
      }
    }
  }

  //
  displaySnackMessage(message: string, duration: number) {
    this.snack.open(message, 'Dismiss', { duration: duration });
  }

  //
  determineSliderValue() {
    this.slider_min_value = this.data.sort(((a: PcPartType, b: PcPartType) => {return a.price - b.price}))[0].price;
    this.slider_max_value = this.data.sort(((a: PcPartType, b: PcPartType) => {return b.price - a.price}))[0].price;
  }

  //
  sortItemsBySliderValue(value: number) {
    this.downloadApiData();

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
    this.downloadApiData();

    this.data = this.data.filter((item) => item.type === items || item.power === items || item.memory === items || item.socket === items || item.efficiency === items);
  }

  //
  sortItemsByParamValue(sortType: string) {
    if (sortType === 'hightolow') {
      this.data.sort(((a, b) => {return b.price - a.price}));
    } else if (sortType === 'lowtohigh') {
      this.data.sort(((a, b) => {return a.price - b.price}));
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
  filterItemsByManufacturer(item: string) {
    this.downloadApiData();

    this.data = this.data.filter((parts: PcPartType) => parts.manufacturer === item);
  }

  //
  ngOnDestroy(): void {
      this.dataSubscription.unsubscribe();
  }
}
