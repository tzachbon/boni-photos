import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';



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
    this.initRoutesNames();
  }

  private set _currentRoute(name: string) {
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

  navigateToRoute(move: 'up' | 'down') {
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
          return;
        }
        break;

      case 'down':
        const lastRoute = this.routesNames[this.routesNames.length - 1];
        if (lastRoute !== this.currentRoute) {
          nextRoute = this.routesNames[currentRouteIndex + 1];
          this.routeStatues[nextRoute] = true;
          this.routeStatues[this.currentRoute] = false;
        } else {
          return;
        }
        break;
    }
    if (nextRoute) {
      this._currentRoute = nextRoute;
      const path = this.getRoutePathByName(nextRoute);
      this.navigateTo(`/${path}`);
    }
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
    const routeName = this.getRouteNameByPath(path);
    this._currentRoute = routeName;
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
