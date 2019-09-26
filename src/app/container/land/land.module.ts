import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandComponent } from './land.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    LandComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ], exports: [
    LandComponent

  ]
})
export class LandModule { }
