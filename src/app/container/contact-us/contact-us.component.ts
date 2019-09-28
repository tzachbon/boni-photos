import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { contactUsAnimations, slide } from 'src/app/shared/animations/animations';
import { FullpageService } from 'src/app/shared/services/fullpage/fullpage.service';
import { MobileService } from 'src/app/shared/services/mobile/mobile.service';

interface IContactUsButton {
  icon: string;
  title: string;
  text: string;
  url: string;
  mobileText: string;
}

const slideRightX = slide('', '-50%,-50%', '.5s', 'slideRightX', '50%,-50%');

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    contactUsAnimations.abstract,
    contactUsAnimations.bigCard,
    contactUsAnimations.socialMedia,
    slideRightX
  ]
})
export class ContactUsComponent implements OnInit, OnDestroy {
  show = false;
  subscription: Subscription = new Subscription();
  @ViewChild('section', { static: true }) section: ElementRef<HTMLDivElement>;
  contactUsButtons: IContactUsButton[] = [];

  constructor(
    private cd: ChangeDetectorRef,
    private fullPageService: FullpageService,
    public mobileService: MobileService) { }

  ngOnInit() {
    this.initFullPageObservable();
    this.initContactUsButtons();
  }

  initContactUsButtons() {
    this.contactUsButtons = [
      {
        icon: 'whatsapp',
        title: 'וואטסאפ',
        text: 'אתם מוזמנים לשלוח הודעה עכשיו דרך הוואטסאפ',
        url: this.whatsAppLink,
        mobileText: 'שלחו הודעה עכשיו!'
      },
      {
        icon: 'email',
        title: 'אימייל',
        text: 'אנחנו תמיד זמינים דרך המייל boniphoto55@gmail.com',
        url: 'boniphoto55@gmail.com',
        mobileText: 'boniphoto55@gmail.com',
      },
      {
        icon: 'phone',
        title: 'נייד',
        text: 'תמיד תוכלו למצוא אותנו בנייד 0523635250',
        url: '0523635250',
        mobileText: '0523635250'
      }
    ]
  }

  get whatsAppLink(): string {
    const phoneNumber = '972523635250';
    const text = 'היי הגעתי דרך האתר Boni';
    const generatedText = text.split(' ').join('%20');
    return `https://wa.me/${phoneNumber}?text=${generatedText}`;
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
