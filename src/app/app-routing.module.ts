import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { RegisterComponent } from './register/register.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AssemblyComponent } from './assembly/assembly.component';
import { AssemblyHomeComponent } from './assembly-home/assembly-home.component';
import { PartsComponent } from './parts/parts.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: "some",
    component: RegisterComponent
  },

  {
    path: 'wishlist',
    component: WishlistComponent
  },

  {
    path: 'assembly',
    component: AssemblyComponent,
    children: [
      {
        path: 'assembly-home',
        component: AssemblyHomeComponent
      },

      {
        path: '',
        redirectTo: '/assembly/assembly-home',
        pathMatch: 'full'
      },

      {
        path: 'parts/:id',
        component: PartsComponent
      }
    ]
  },

  {
    path: 'cart',
    component: CartComponent
  },

  {
    path: 'checkout',
    component: CheckoutComponent
  },

  {
    path: "",
    redirectTo: 'home',
    pathMatch: "full"
  },

  {
    path: "**",
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
