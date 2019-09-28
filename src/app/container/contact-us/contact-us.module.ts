import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';



@NgModule({
  declarations: [ContactUsComponent, ContactUsFormComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ContactUsComponent,
    ContactUsFormComponent
  ]
})
export class ContactUsModule { }
