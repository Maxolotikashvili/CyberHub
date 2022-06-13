import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCcVisa, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
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

  constructor(private fb: FormBuilder) { }

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

}
