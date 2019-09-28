import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FullpageService } from '../shared/services/fullpage/fullpage.service';
import { Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

interface Section {
  name: string;
  display: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit, OnDestroy {
  sections: Section[] = [
    {
      name: 'land',
      display: 'Top'
    },
    {
      name: 'about-us',
      display: 'About Us'
    },
    {
      name: 'products',
      display: 'Products',
    },
    {
      name: 'contact-us',
      display: 'Contact Us'
    },
  ];
  navOpen = true;
  changeBackground = false;
  subscription = new Subscription();

  constructor(private fullpageService: FullpageService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.initCurrentSectionObservable();
  }

  initCurrentSectionObservable() {
    const fullPage$ = this.fullpageService.activeComponentName
      .pipe(
        map((componentName: string) => !componentName.includes('land')),
        filter(changeBackground => changeBackground !== this.changeBackground)
      )
      .subscribe(changeBackground => {
        this.changeBackground = changeBackground;
        this.cd.detectChanges();
      });
    this.subscription.add(fullPage$);
  }

  moveTo(index: number) {
    this.fullpageService.moveTo(index);
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
