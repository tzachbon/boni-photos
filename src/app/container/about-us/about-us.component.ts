import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MobileService } from '../../shared/services/mobile/mobile.service';
import { RoutesService } from '../../shared/services/routes.service';
import { slideTo } from 'src/app/shared/animations/animations';

const slideXRight = slideTo('X', '-0rem', '1s', 'slideXRight', '-10rem');
const slideXLeft = slideTo('X', '0rem', '1s', 'slideXLeft', '10rem');
const slideYUp = slideTo('Y', '-17rem', '1s', 'slideYUp');
const slideYDown = slideTo('Y', '22rem', '1s', 'slideYDown');

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideYUp, slideYDown, slideXLeft, slideXRight],
})
export class AboutUsComponent implements OnInit, OnDestroy {
  show = false;
  @ViewChild('aboutUsRef', { static: false }) aboutUsRef: ElementRef<HTMLDivElement>;
  subscription: Subscription = new Subscription();
  sections: string[] = [];

  constructor(
    private cd: ChangeDetectorRef,
    private routesService: RoutesService,
    public mobileService: MobileService
  ) {
  }

  ngOnInit() {
    this.initFullPageObservable();
    this.initSections();
    console.log('====================================');
    console.log(this.show);
    console.log('====================================');
  }

  initSections() {
    this.sections = [
      `מזל טוב! האירוע עוד שניה כאן, ביחד נוכל לתכנן איך תוכלו לגרום לאירוע להראות כמו הפקת ענק!`,
      `בחירת נכונה של חברת הצילום היא הכרחית, ואנחנו מומחים בתפיסת הרגעים הנכונים והחשובים`,
      `תקבלו את התמיכה שלנו בכל שלב, עד שנגיע תוצר המושלם בעינכם`
    ]
    this.cd.detectChanges();
  }

  initFullPageObservable() {
    const routes = this.routesService.routesNames;
    const componentRoute = routes.find(route => route === 'about-us');
    const currentUrlPath = location.pathname.replace('/', '');
    this.show = currentUrlPath === componentRoute;
    this.cd.detectChanges();

    const fullPage$ = this.routesService.currentRoute$
      .pipe(map(currentRoute => {
        return componentRoute === currentRoute;
      }))
      .subscribe(isLast => {
        this.show = isLast;
        this.cd.detectChanges();
      });
    this.subscription.add(fullPage$);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
