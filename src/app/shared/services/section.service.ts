import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../models/product.interface';


export interface ISection {
  name: string;
  elementRef: ElementRef<HTMLDivElement>;
}

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private chosenProduct$$ = new BehaviorSubject<IProduct>(null);
  private chosenProduct: IProduct;
  constructor() { }

  chooseProduct(product: IProduct) {
    this.chosenProduct = product;
    this.productHasChanged();
  }

  productHasChanged() {
    this.chosenProduct$$.next(this.chosenProduct);
  }

  get chosenProduct$() {
    return this.chosenProduct$$.asObservable();
  }

}
