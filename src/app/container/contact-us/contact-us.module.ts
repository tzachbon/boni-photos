import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ContactUsComponent
  ]
})
export class ContactUsModule { }
