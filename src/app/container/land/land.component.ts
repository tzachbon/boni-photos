import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { SectionService, ISection } from 'src/app/shared/services/section.service';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class LandComponent implements OnInit {
  featureBoxes: string[] = [
    'צילום מגנטים סטילס',
    ' וידאו לכל אירוע: בר/בת מצווה  חתונה לחינה לברית',
    'צילום לאירועים עסקיים  לקידום מכירות',
    'לימי הולדת  למסיבות סיום בתי ספר / גני ילדים'
  ]
  constructor(private sectionsService: SectionService, private cd: ChangeDetectorRef) { }
  @ViewChild('section', { static: true }) section: ElementRef<HTMLDivElement>;


  ngOnInit() {

  }



}
