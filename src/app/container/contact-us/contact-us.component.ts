import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FullpageService } from 'src/app/shared/services/fullpage/fullpage.service';
import { MobileService } from 'src/app/shared/services/mobile/mobile.service';
import { contactUsAnimations } from 'src/app/shared/animations/animations';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    contactUsAnimations.abstract, contactUsAnimations.bigCard, contactUsAnimations.socialMedia
  ]
})
export class ContactUsComponent implements OnInit, OnDestroy {
  show = false;
  subscription: Subscription = new Subscription();
  @ViewChild('section', { static: true }) section: ElementRef<HTMLDivElement>;


  constructor(
    private cd: ChangeDetectorRef,
    private fullPageService: FullpageService,
    public mobileService: MobileService) { }

  ngOnInit() {
    this.initFullPageObservable();

  }

  initFullPageObservable() {
    const fullPage$ = this.fullPageService.activeComponentName
      .subscribe(componentName => {
        const isOnViewPort = componentName === this.section.nativeElement.className;
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
