import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, RouterOutlet } from '@angular/router';
import { fromEvent, merge, Subscription } from 'rxjs';
import { delay, filter } from 'rxjs/operators';
import { routerAnimation } from './shared/animations/router.animation';
import { RoutesService } from './shared/services/routes.service';
import { MobileService } from 'src/app/shared/services/mobile/mobile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    routerAnimation
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  shouldScroll = true;
  lastScrollPosition: number;
  isMobile: boolean;
  constructor(
    private routesService: RoutesService,
    public mobileService: MobileService,
  ) {

  }

  ngOnInit() {
    this.initMobileObservable();
    this.initRouteNavigationEnd$();
    this.initScrollDetector();
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
