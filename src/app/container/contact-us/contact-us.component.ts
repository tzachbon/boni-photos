import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { contactUsAnimations, slide } from 'src/app/shared/animations/animations';
import { MobileService } from 'src/app/shared/services/mobile/mobile.service';
import { RoutesService } from '../../shared/services/routes.service';

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
    private routesService: RoutesService,
    public mobileService: MobileService) { }

  ngOnInit() {
    this.initFullPageObservable();
    this.initContactUsButtons();
  }

  public scrollTo() {
    if (this.section) {
      this.section.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' })
    }
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
        url: 'mailto:boniphoto55@gmail.com',
        mobileText: 'boniphoto55@gmail.com',
      },
      {
        icon: 'phone',
        title: 'נייד',
        text: 'תמיד תוכלו למצוא אותנו בנייד 0523635250',
        url: 'tel:972523635250',
        mobileText: '0523635250'
      }
    ]
    this.cd.detectChanges();
  }

  get whatsAppLink(): string {
    const phoneNumber = '972523635250';
    const text = 'היי הגעתי דרך האתר Boni';
    const generatedText = text.split(' ').join('%20');
    return `https://wa.me/${phoneNumber}?text=${generatedText}`;
  }

  initFullPageObservable() {
    const routes = this.routesService.routesNames;
    const last = routes[routes.length - 1];
    const currentUrlPath = location.pathname.replace('/', '');
    this.show = currentUrlPath === last;
    this.cd.detectChanges();

    const fullPage$ = this.routesService.currentRoute$
      .pipe(map(currentRoute => {
        return last === currentRoute;
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
