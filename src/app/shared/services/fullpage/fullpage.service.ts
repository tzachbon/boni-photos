import { Injectable } from '@angular/core';
import { MnFullpageService } from 'ngx-fullpage';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FullpageService {
  private activeComponent = new Subject<string>();
  constructor(private fullpageService: MnFullpageService) {
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

  public moveTo(index) {
    const fullpageWrapper = document.querySelector('.fullpage-wrapper') as HTMLDivElement;
    const currentPage = fullpageWrapper.childNodes[index].firstChild.firstChild.firstChild as HTMLDivElement;
    this.fullpageService.moveTo(index + 1);
    this.activeComponent.next(currentPage.className);
  }




}
