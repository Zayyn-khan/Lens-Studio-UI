import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component/home.component';
import { MainLayoutComponent } from './layout/main-layout.component/main-layout.component';
import { NewArrival } from './pages/new-arrival/new-arrival';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { ProductDetailComponent } from './pages/product-detail.component/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: About },
      { path: 'contact', component: Contact },
      { path: 'new-arrival', component: NewArrival },

      {
        path: 'product/:id',
        component: ProductDetailComponent,
      },

      {
        path: 'cart',
        loadComponent: () =>
          import('./pages/cart/cart.component')
            .then(m => m.CartComponent)
      },

      {
        path: 'checkout',
        loadComponent: () =>
          import('./pages/checkout/checkout')
            .then(m => m.CheckoutComponent)
      }
    ],
  },
];
