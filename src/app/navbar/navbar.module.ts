import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { SharedModule } from '../shared/shared.module';
import { MnFullpageModule } from 'ngx-fullpage';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
