import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, NgZone, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet, NavigationEnd } from '@angular/router';
import { fromEvent, Subscription, merge } from 'rxjs';
import { filter, throttleTime, delay } from 'rxjs/operators';
import { routerAnimation } from './shared/animations/router.animation';
import { RoutesService } from './shared/services/routes.service';

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
  constructor(
    private routesService: RoutesService,
  ) {

  }

  ngOnInit() {
    this.initRouteNavigationEnd$();
    this.initScrollDetector();
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

    const scroll$ = fromEvent(window, 'scroll')
      .pipe(
        filter((e) => this.shouldScroll)
      );

    const merge$ = merge(scroll$, wheel$)
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
