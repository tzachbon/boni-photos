import { Component } from '@angular/core';
import { MobileService } from 'src/app/shared/services/mobile/mobile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  constructor(public mobileService: MobileService) { }

}
