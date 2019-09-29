import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IProduct } from '../../models/product.interface';
import { SectionService } from 'src/app/shared/services/section.service';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent implements OnInit {
  @Input() product: IProduct;
  constructor(
    private cd: ChangeDetectorRef,
    private sectionService: SectionService,
  ) { }

  ngOnInit() {
  }

  onChooseProduct() {
    this.sectionService.chooseProduct(this.product);
  }



}
