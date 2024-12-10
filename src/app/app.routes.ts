import { Routes } from '@angular/router';
import { LandingPageComponent } from './features/pages/landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./features/pages/landing-page/landing-page.component').then(m => m.LandingPageComponent),
  },
  {
    path: 'home/:id',
    loadComponent: () => import('./features/pages/product-details/product-details.component').then(m => m.ProductDetailsComponent),
  },
  {
    path: 'cart',
    loadComponent: () => import('./features/pages/cart-page/cart-page.component').then(m => m.CartPageComponent),
  },
];
