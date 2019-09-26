import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, HostListener } from '@angular/core';
import { SectionService, ISection } from './shared/services/section.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  sections: ISection[] = [];
  sectionsReady = false;
  currentSection: ISection;
  canEnter = true;
  constructor(private sectionsService: SectionService) {

  }




  scrollToSection() {
    this.handlerSectionSmoothness();
    this.currentSection.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  handlerSectionSmoothness() {
    this.sectionsReady = false;
    setTimeout(() => {
      this.canEnter = true;
      this.sectionsReady = true;
    }, 1000);
  }

  ngOnInit() {
    this.iniSectionsObservable();
  }

  iniSectionsObservable() {
    const sections$ = this.sectionsService.sections$
      .asObservable()
      .pipe(filter(sections => sections.length === this.sectionsService.SECTIONS_LENGTH))
      .subscribe(sections => {
        this.sections = sections;
        this.sectionsReady = true;
      });
    this.subscription.add(sections$);
  }



  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
