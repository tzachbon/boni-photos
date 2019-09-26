import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { LandModule } from './container/land/land.module';
import { NavbarComponent } from './container/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './container/products/products.module';
import { ContactUsModule } from './container/contact-us/contact-us.module';
import { MnFullpageModule } from 'ngx-fullpage';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
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
    ContactUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
