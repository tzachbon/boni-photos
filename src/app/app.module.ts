import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MnFullpageModule } from 'ngx-fullpage';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AboutUsModule } from './container/about-us/about-us.module';
import { ContactUsModule } from './container/contact-us/contact-us.module';
import { LandModule } from './container/land/land.module';
import { ProductsModule } from './container/products/products.module';
import { NavbarModule } from './navbar/navbar.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true }),
    SharedModule,
    MnFullpageModule.forRoot(),

    // Container Modules
    LandModule,
    ProductsModule,
    ContactUsModule,
    AboutUsModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
