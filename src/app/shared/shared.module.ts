import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeatureBoxComponent } from './ui/feature-box/feature-box.component';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { SocialMediaButtonComponent } from './ui/social-media-button/social-media-button.component';



@NgModule({
  declarations: [FeatureBoxComponent, ProductCardComponent, SocialMediaButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    FeatureBoxComponent,
    ProductCardComponent,
    SocialMediaButtonComponent
  ]
})
export class SharedModule { }
