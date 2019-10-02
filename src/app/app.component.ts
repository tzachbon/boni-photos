import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, NgZone, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fromEvent, Subscription } from 'rxjs';
import { filter, throttleTime } from 'rxjs/operators';
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
  shouldScrollToMain = true;
  constructor(
    private zone: NgZone,
    private routesService: RoutesService,
    @Inject(DOCUMENT) private document: Document,
  ) {

  }

  ngOnInit() {
    this.initWheelDetector();
  }

  initScrollObservable(event: WheelEvent) {
    if (event.deltaX) {
      return;
    }


    const isUp = event.deltaY < 0;
    if (this.shouldScrollToMain) {
      this.shouldScrollToMain = false;
      if (!isUp) {
        this.zone.run(this.navigate.bind(this, 'down'));

      } else {
        this.zone.run(this.navigate.bind(this, 'up'));
      }
    } else {
      this.shouldScrollToMain = true;
    }

  }

  navigate(state: 'up' | 'down') {
    setTimeout(() => {
      this.routesService.navigateToRoute(state);
      setTimeout(() => {
        this.shouldScrollToMain = true;
      }, 500, this);
    }, 300, this);
  }

  initWheelDetector() {
    this.zone.runOutsideAngular(this.onWheelDetector.bind(this));
  }

  onWheelDetector() {
    const event$ = fromEvent(this.document, 'wheel')
      .pipe(
        throttleTime(2000),
        filter((e) => this.shouldScrollToMain)
      )
      .subscribe((event: WheelEvent) => this.initScrollObservable(event));
    this.subscription.add(event$);
  }

  onAnimateRouter(outlet: RouterOutlet) {
    return outlet.activatedRouteData['animation'];
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
