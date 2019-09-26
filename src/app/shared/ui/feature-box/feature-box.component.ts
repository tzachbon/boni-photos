import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature-box',
  templateUrl: './feature-box.component.html',
  styleUrls: ['./feature-box.component.scss']
})
export class FeatureBoxComponent implements OnInit {
  @Input() text: string;
  constructor() { }

  ngOnInit() {
  }

}
