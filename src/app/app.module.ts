import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MnFullpageModule } from 'ngx-fullpage';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AboutUsModule } from './container/about-us/about-us.module';
import { ContactUsModule } from './container/contact-us/contact-us.module';
import { LandModule } from './container/land/land.module';
import { NavbarComponent } from './container/navbar/navbar.component';
import { ProductsModule } from './container/products/products.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true }),
    SharedModule,
    MnFullpageModule.forRoot(),

    // Container Modules
    LandModule,
    ProductsModule,
    ContactUsModule,
    AboutUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
