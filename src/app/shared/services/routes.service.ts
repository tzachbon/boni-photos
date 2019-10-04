import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';



interface IRouteStatus {
  [routeName: string]: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  routeStatues: IRouteStatus = {};
  routesNames: string[] = [];
  currentRoute$ = new Subject<string>();
  constructor(public router: Router, public route: ActivatedRoute) {
    this.initRouteStatues();
    this.initCurrentRouteObservable();
    this.initRoutesNames();
  }

  private set _currentRoute(name: string) {
    console.log('Current Route Set To ==> ', name);
    this.currentRoute$.next(name);
  }

  private initRouteStatues() {
    this.router.config.forEach((route) => {
      const { name } = route.data;
      const isCurrent = location.pathname.replace('/', '') === route.path;
      if (name) {
        this.routeStatues[name] = isCurrent;

        if (isCurrent) {
          this._currentRoute = name;
        }
      }
    });
  }

  get routeNavigationEnd$(): Observable<any> {
    return this.router.events
      .pipe(filter(e => e instanceof NavigationEnd));
  }

  private initCurrentRouteObservable() {
    this.routeNavigationEnd$
      .subscribe((event: NavigationEnd) => {
        const url = event.url.replace('/', '');
        const routeName = this.getRouteNameByPath(url);
        this._currentRoute = routeName;
      });
  }

  navigateToRoute(move: 'up' | 'down'): boolean {
    let nextRoute: string;
    const currentRouteIndex = this.routesNames.indexOf(this.currentRoute as string);
    switch (move) {
      case 'up':
        const firstRoute = this.routesNames[0];
        if (firstRoute !== this.currentRoute) {
          nextRoute = this.routesNames[currentRouteIndex - 1];
          this.routeStatues[nextRoute] = true;
          this.routeStatues[this.currentRoute] = false;
        } else {
          return false;
        }
        break;

      case 'down':
        const lastRoute = this.routesNames[this.routesNames.length - 1];
        if (lastRoute !== this.currentRoute) {
          nextRoute = this.routesNames[currentRouteIndex + 1];
          this.routeStatues[nextRoute] = true;
          this.routeStatues[this.currentRoute] = false;
        } else {
          return false;
        }
        break;
    }
    if (nextRoute) {
      const path = this.getRoutePathByName(nextRoute);
      this.navigateTo(`/${path}`);
      return true;
    }
    return false;
  }

  getRoutePathByName(name: string): string {
    const route = this.router.config.find(routeData => routeData.data.name === name);
    if (route) {
      return route.path;
    } else {
      return '';
    }
  }

  getRouteNameByPath(path: string) {
    const route = this.router.config.find(rt => rt.path === path)
    if (route) {
      return route.data.name;
    }
    return '';
  }

  get currentRoute(): keyof IRouteStatus {
    const path = location.pathname.replace('/', '');
    const currentRoute = this.router.config.find(route => route.path === path);
    if (currentRoute) {
      return currentRoute.data.name;
    }
    return '';
  }

  navigateTo(path: any) {
    this.router.navigate([path], { relativeTo: this.route });
  }

  initRoutesNames() {
    if (this.router && this.router.config) {
      this.routesNames = this.router.config.map(route => route.data.name);
    }
  }

  get routesConfig() {
    if (this.router && this.router.config) {
      return this.router.config.map(route => route);
    }
    return [];
  }
}
