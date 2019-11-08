import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { bounceOnEnterAnimation } from 'angular-animations';
import { SectionService } from 'src/app/shared/services/section.service';
import { IProduct } from '../../shared/models/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    bounceOnEnterAnimation()
  ]
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  @ViewChild('section', { static: true }) section: ElementRef<HTMLDivElement>;
  constructor(private sectionsService: SectionService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.initProducts();
  }


  initProducts() {
    this.products = [
      {
        title: 'מגנטים',
        image: 'https://images.unsplash.com/photo-1487770931682-b80013ed9cc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2200&q=80',
        packages: [
          'חבילה עד 1.5 שעות צילום 650 ₪',
          'חבילה עד 2.5 שעות צילום 1050 ₪',
          'חבילה עד 3.5 שעות צילום 1350 ₪ ',
          'חבילה עד 5 שעות צילום 1550 ₪ '
        ]
      },
      {
        title: 'משולב מגנטים וצילום ווידאו',
        image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3280&q=80',
        packages: [
          'חבילה עד 1.5 שעות צילום 1650₪',
          'חבילה עד 2.5 שעות צילום 2050 ₪ ',
          'חבילה עד 3.5 שעות צילום 1350 ₪',
          'חבילה עד 5 שעות צילום 2550 ₪'
        ],
        isPremium: true
      },
      {
        title: 'צילום וידיאו',
        image: 'https://images.unsplash.com/photo-1517660189812-fb6762523f02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3304&q=80',
        packages: [
          'חבילה עד 1.5 שעות צילום 1150₪',
          'חבילה עד 2.5 שעות צילום 1550 ₪ ',
          'חבילה עד 3.5 שעות צילום 1850 ₪',
          'חבילה עד 5 שעות צילום 2050 ₪ '
        ]
      },
    ];
    this.cd.markForCheck();
  }

}
