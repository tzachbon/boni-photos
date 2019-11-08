import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NavigationEnd, RouterOutlet } from '@angular/router';
import { fromEvent, merge, Subscription } from 'rxjs';
import { delay, filter } from 'rxjs/operators';
import { routerAnimation } from './shared/animations/router.animation';
import { RoutesService } from './shared/services/routes.service';
import { MobileService } from 'src/app/shared/services/mobile/mobile.service';
import { ContactUsComponent } from './container/contact-us/contact-us.component';
import { HttpService } from './shared/services/http/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    routerAnimation
  ]
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  subscription = new Subscription();
  shouldScroll = true;
  lastScrollPosition: number;
  isMobile: boolean;
  moveToContactUs = false;

  @ViewChild('contactUsRef', { static: false }) contactUsRef: ContactUsComponent;

  constructor(
    private routesService: RoutesService,
    public mobileService: MobileService,
    private http: HttpService,
  ) {
    this.navigateToContactUsMobile();
  }

  ngOnInit() {
    this.initMobileObservable();
    this.initRouteNavigationEnd$();
    this.initScrollDetector();
    this.updateUserEntered();
  }

  ngAfterViewInit() {
    if (this.moveToContactUs) {
      setTimeout(() => {
        this.contactUsRef.scrollTo();
      }, 500);
    }
  }

  updateUserEntered() {
    this.http.updateUser().subscribe();
  }

  navigateToContactUsMobile() {
    const isMobile = window.innerWidth < 600;
    const isOnContactUs = window.location.pathname.toLowerCase().includes('contact');
    this.moveToContactUs = isMobile && isOnContactUs;
  }

  initMobileObservable() {
    const mobile$ = this.mobileService.isHandset$.subscribe(isHandset => {
      this.isMobile = isHandset;
    });
    this.subscription.add(mobile$);
  }

  initRouteNavigationEnd$() {
    this.routesService.routeNavigationEnd$
      .pipe(delay(1000))
      .subscribe((event: NavigationEnd) => {
        this.shouldScroll = true;
      });
  }

  initScrollObservable(event: WheelEvent) {
    if (event.deltaX) {
      return;
    }


    const isUp = event.deltaY < 0;
    if (this.shouldScroll) {
      this.shouldScroll = false;
      if (!isUp) {
        this.navigate('down');

      } else {
        this.navigate('up');
      }
    }

  }

  navigate(state: 'up' | 'down') {
    setTimeout(() => {
      const isNavigated = this.routesService.navigateToRoute(state);
      if (!isNavigated) {
        this.shouldScroll = true;
      }
    }, 300, this);
  }

  initScrollDetector() {
    this.onScrollDetector();
  }

  onScrollDetector() {
    const wheel$ = fromEvent(window, 'wheel')
      .pipe(
        filter((e) => this.shouldScroll)
      );


    const merge$ = merge(wheel$)
      .pipe(filter(e => !this.isMobile))
      .subscribe((event: WheelEvent) => this.initScrollObservable(event));

    this.subscription.add(merge$);
  }

  onAnimateRouter(outlet: RouterOutlet) {
    return outlet.activatedRouteData['animation'];
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
