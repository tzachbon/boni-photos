import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandComponent } from './container/land/land.component';
import { AboutUsComponent } from './container/about-us/about-us.component';
import { ProductsComponent } from './container/products/products.component';
import { ContactUsComponent } from './container/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '',
    component: LandComponent,
    data: {
      animation: 1,
      name: 'top'
    }
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    data: {
      animation: 2,
      name: 'about-us'
    }
  },
  {
    path: 'products',
    component: ProductsComponent,
    data: {
      name: 'products',
      animation: 3
    }
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    data: {
      name: 'contact-us',
      animation: 4
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
