import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { CheckoutService } from '../Services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  // Items
  items!: any[];
  user!: any;
  deploy: boolean = false;

  // FormGroups
  shippingForms!: FormGroup;
  billingForms!: FormGroup;

  // Shipping Form Variables
  FirstName!: any;
  LastName!: any;
  Country!: any;
  City!: any;
  Street!: any;
  Apartament!: any;
  Postal!: any;

  // Billing Form Variables
  CreditCard!: any;
  ExpMonth!: any;
  ExpYear!: any;
  Policy!: any;

  // Fontawesome
  expressCard = faCreditCard;
  visa = faCcVisa;

  // Class
  expressCardBox = "expresscard-box";
  visaCardBox = "visacard-box";

  // Spinner
  spinnerboxshow = "spinnerboxhide";
  blur = "";

  constructor(private fb: FormBuilder, private checkoutservice: CheckoutService, private location: Location) { }

  ngOnInit(): void {

    // Scroll Up
    window.scrollTo(0, 0);   

    // Shipping Form
    this.shippingForms = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      apartament: [''],
      postal: ['', [Validators.required, Validators.min(100), Validators.max(999)]],
    });

    // Shipping Form Getters
    this.FirstName = this.shippingForms.get('firstName');
    this.LastName = this.shippingForms.get('lastName');
    this.Country = this.shippingForms.get('country');
    this.City = this.shippingForms.get('city');
    this.Street = this.shippingForms.get('street');
    this.Apartament = this.shippingForms.get('apartament');
    this.Postal = this.shippingForms.get('postal');


    // Billing Form
    this.billingForms = this.fb.group({
      creditCard: ['', [Validators.required, Validators.min(100000000000), Validators.max(999999999999)]],
      expMonth: ['', [Validators.required, Validators.min(0o1), Validators.max(12)]],
      expYear: ['', [Validators.required, Validators.min(2022), Validators.max(2025)]],
      policy: ['', Validators.requiredTrue]
    });

    // Billing Form Getters
    this.CreditCard = this.billingForms.get('creditCard');
    this.ExpMonth = this.billingForms.get('expMonth');
    this.ExpYear = this.billingForms.get('expYear');
    this.Policy = this.billingForms.get('policy');


    // Get Items
      this.checkoutservice.sendItems().subscribe((data: any[]) => {this.items = data;})
  };

  changeClass(change: boolean) {
    if (change === true) {
      this.expressCardBox = "expresscard-box-active";
      this.visaCardBox = "visacard-box";
    } else if (change === false) {
      this.expressCardBox = "expresscard-box";
      this.visaCardBox = "visacard-box-active"
    }
  }

  // Get User Details
  getUser(details: any) {
    this.user = details;
  }

  // Calculate Total Cost
  totalCost() {
    let total: number = 0;

    this.items?.forEach(element => {
      total += element.price;
    });

    return total;
  }

  purchaseItems() {
    this.spinnerboxshow = "spinnerboxshow";
    this.blur = "blur";

    setTimeout(() => {
      this.spinnerboxshow = "spinnerboxhide";
      this.blur = "";
      
      this.deploy = true;
      window.scrollTo(0, 100);
    }, 1500);
  }

  goBack() {
    this.deploy = false;
  }

  backButton() {
    this.location.back();
  }

}
