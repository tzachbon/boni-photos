import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { MobileService } from '../shared/services/mobile/mobile.service';
import { RoutesService } from '../shared/services/routes.service';
import { UtilService } from '../shared/services/util/util.service';
import { map, shareReplay } from 'rxjs/operators';

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
  ];
  navOpen: boolean;
  changeBackground = false;
  subscription = new Subscription();
  isFirstRoute$: Observable<any>;

  constructor(
    private cd: ChangeDetectorRef,
    private utilService: UtilService,
    private routesService: RoutesService,
    public mobileService: MobileService
  ) { }

  ngOnInit() {
    this.initIsFirstRoute$();
    this.initSections();
    this.initNavOpen();
  }

  initIsFirstRoute$() {
    const firstRouteName = this.routesService.routesNames[0];
    this.isFirstRoute$ = this.routesService.currentRoute$
      .pipe(map(routeName => routeName !== firstRouteName));
  }


  initNavOpen() {
    setTimeout(() => {
      this.navOpen = window.screen.width > 550;
      this.cd.detectChanges();
    }, 1000);
  }



  moveTo(index: number) {
    const route = this.sections[index];
    const path = this.routesService.getRoutePathByName(route.name);
    this.routesService.navigateTo(path);
  }

  initSections() {
    this.sections = this.routesService.routesNames.map(routeName => {
      const display = this.utilService.titlecaseString(routeName);
      const section: Section = {
        name: routeName,
        display
      };
      return section;
    });
    this.cd.detectChanges();
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
  }
 
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
