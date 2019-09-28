import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FullpageService {
  private activeComponent = new Subject<string>();
  constructor() {
    this.initActiveComponent();
  }

  private initActiveComponent() {
    document.addEventListener('wheel', (event) => {
      const activeRef = document.querySelector('.active');
      const component: HTMLDivElement = activeRef.firstChild.firstChild.firstChild as HTMLDivElement;
      this.activeComponent.next(component.className);
    });
  }

  public get activeComponentName() {
    return this.activeComponent.asObservable();
  }




}
