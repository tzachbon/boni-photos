import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FullpageService } from '../shared/services/fullpage/fullpage.service';
import { Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { MobileService } from '../shared/services/mobile/mobile.service';

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
  navOpen: boolean;
  changeBackground = false;
  subscription = new Subscription();

  constructor(
    private fullpageService: FullpageService,
    private cd: ChangeDetectorRef,
    public mobileService: MobileService
  ) { }

  ngOnInit() {
    this.initNavOpen();
    this.initCurrentSectionObservable();
  }

  initNavOpen() {
    setTimeout(() => {
      this.navOpen = window.screen.width > 550;
      this.cd.detectChanges();
    }, 1000);
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
    const isMobile = window.screen.width <= 550;
    if (isMobile) {
      this.toggleNav();
      this.cd.detectChanges();
    }
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
