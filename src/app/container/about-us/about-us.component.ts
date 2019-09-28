import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FullpageService } from '../../shared/services/fullpage/fullpage.service';
import { Subscription } from 'rxjs';
import { slide } from 'src/app/shared/animations/animations';
import { MobileService } from '../../shared/services/mobile/mobile.service';

const slideXRight = slide('X', '-0rem', '1s', 'slideXRight', '-10rem');
const slideXLeft = slide('X', '0rem', '1s', 'slideXLeft', '10rem');
const slideYUp = slide('Y', '-20rem', '1s', 'slideYUp');
const slideYDown = slide('Y', '20rem', '1s', 'slideYDown');

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
    private fullPageService: FullpageService,
    public mobileService: MobileService
  ) {
  }

  ngOnInit() {
    this.initFullPageObservable();
    this.initSections();
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
    const fullPage$ = this.fullPageService.activeComponentName
      .subscribe(componentName => {
        const isOnViewPort = componentName === this.aboutUsRef.nativeElement.className;
        if (this.show !== isOnViewPort) {
          this.show = isOnViewPort;
          this.cd.detectChanges();
        }
      });
    this.subscription.add(fullPage$);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
