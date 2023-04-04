import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Page404Component } from './page404/page404.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { LoadingComponent } from './loading/loading.component';
import { AssemblyComponent } from './assembly/assembly.component';
import { AssemblyHomeComponent } from './assembly-home/assembly-home.component';
import { SwiperModule } from 'swiper/angular';
import { PartsComponent } from './parts/parts.component';
import { NewManufacturersSectionComponent } from './new-manufacturers-section/new-manufacturers-section.component';
import { GameReadyPcsSectionComponent } from './game-ready-pcs-section/game-ready-pcs-section.component';
import { BadgeComponentComponent } from './badge-component/badge-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    FooterComponent,
    WishlistComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component,
    CheckoutComponent,
    HeaderMenuComponent,
    LoadingComponent,
    AssemblyComponent,
    AssemblyHomeComponent,
    PartsComponent,
    NewManufacturersSectionComponent,
    GameReadyPcsSectionComponent,
    BadgeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
