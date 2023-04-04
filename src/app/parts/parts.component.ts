import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PcPartsService } from '../Services/buildservice/pc-parts.service';
import { PcPartType } from '../model';
import { CartItemService } from '../Services/Cart/cart-item.service';
import { WishlistService } from '../Services/Wishlist/wishlist.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {
  routerId!: number;
  pcPartName!: string;
  
  data: PcPartType[] = [];
  modifiedData: any[] = [];

  slider_min_value: number = 20;
  slider_max_value: number = 50;

  MAT_MENU_ITEMS: string[] = [];

  constructor(private route: ActivatedRoute, private pcPartsService: PcPartsService, private cartItemService: CartItemService, private wishListService: WishlistService, private snack: MatSnackBar) { }

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
    this.determineSliderValue();
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
  downloadApiData() {
    this.data = this.pcPartsService.getPcParts().filter((item: PcPartType) => item.productName === this.pcPartName);
    this.modifiedData = this.pcPartsService.getPcParts().filter((item: PcPartType) => item.productName === this.pcPartName);
  }

  //
  sendItemToCartOrWishList(item: PcPartType, sendTo: string) {
    if (this.pcPartName !== 'pc') {
      if (sendTo === 'cart') {
        this.cartItemService.sendItems(item);
        this.displaySnackMessage('Item Sent To Cart', 'Dismiss');
      } else if (sendTo === 'wishlist') {
        this.wishListService.sendItems(item);
        this.displaySnackMessage('Item Sent To Wishlist', 'Dismiss');
      }
    }
  }

  //
  displaySnackMessage(message: string, action: string) {
    this.snack.open(message, action, {duration: 3000});
  }

  //
  determineSliderValue() {
    this.slider_min_value = this.data.sort(((a, b) => {return a.price - b.price}))[0].price;
    this.slider_max_value = this.data.sort(((a, b) => {return b.price - a.price}))[0].price;
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
}
