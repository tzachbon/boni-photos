import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MnFullpageModule } from 'ngx-fullpage';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AboutUsModule } from './container/about-us/about-us.module';
import { ContactUsModule } from './container/contact-us/contact-us.module';
import { LandModule } from './container/land/land.module';
import { ServerInterceptor } from './shared/services/http/server.interceptor';
import { ProductsModule } from './container/products/products.module';
import { NavbarModule } from './navbar/navbar.module';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,

    // Container Modules
    LandModule,
    ProductsModule,
    ContactUsModule,
    AboutUsModule,
    NavbarModule
  ],
  providers: [
    {
      multi: true,
      useClass: ServerInterceptor,
      provide: HTTP_INTERCEPTORS
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
