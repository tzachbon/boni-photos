import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutUsComponent } from './about-us.component';



@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AboutUsComponent
  ]
})
export class AboutUsModule { }
