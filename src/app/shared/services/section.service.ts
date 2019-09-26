import { Injectable, ElementRef } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';


export interface ISection {
  name: string,
  elementRef: ElementRef<HTMLDivElement>
}

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  sections: ISection[] = [];
  sections$ = new BehaviorSubject<ISection[]>(this.sections);
  readonly SECTIONS_LENGTH = 3;
  constructor() { }

  addSection(section: ISection) {
    this.sections.push(section);
    this.sectionsChanged();
  }

  sectionsChanged() {
    this.sections$.next(this.sections);
  }
}
