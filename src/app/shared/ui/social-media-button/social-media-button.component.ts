import { Component, OnInit, Input } from '@angular/core';
import { ISocialMedia } from '../../models/social-media.interface';

@Component({
  selector: 'app-social-media-button',
  templateUrl: './social-media-button.component.html',
  styleUrls: ['./social-media-button.component.scss']
})
export class SocialMediaButtonComponent implements OnInit {
  @Input() socialMedia: ISocialMedia;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.socialMedia.onClick();
  }

}
