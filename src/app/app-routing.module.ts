import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  { path: 'build', loadChildren: () => import('./build/build.module').then(m => m.BuildModule) },

  {
    path: 'cart',
    component: CartComponent
  },

  {
    path: "",
    redirectTo: 'home',
    pathMatch: "full"
  },

  // PageNotFound
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
