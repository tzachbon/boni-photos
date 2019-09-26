import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { SectionService, ISection } from 'src/app/shared/services/section.service';

import { ISocialMedia } from 'src/app/shared/models/social-media.interface';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactUsComponent implements OnInit {
  socialMediaButtons: ISocialMedia[] = [];
  constructor(private sectionsService: SectionService, private cd: ChangeDetectorRef) { }
  @ViewChild('section', { static: true }) section: ElementRef<HTMLDivElement>;

  ngOnInit() {
    this.initSection();
    this.initSocialMediaButtons();
  }

  initSocialMediaButtons() {
    this.socialMediaButtons = [
      {
        title: 'צרו איתנו קשר דרך הוואטאפ',
        color: 'green',
        fontColor: 'white',
        onClick: () => {
          console.log('whatsapp');
        }
      }
    ];
  }
  initSection() {
    const section: ISection = {
      name: 'ContactUsComponent',
      elementRef: this.section
    }
    this.sectionsService.addSection(section);
  }


}
