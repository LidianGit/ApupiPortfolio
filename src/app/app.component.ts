import { Component } from '@angular/core';
import {setTheme} from 'ngx-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myPortfolio';

  constructor() {
    setTheme('bs4');
  }

  toggleMenu()  {
      const siteBranding = document.getElementsByClassName('site-branding').item(0);
      const siteNavigation = document.getElementsByClassName('site-navigation').item(0);
      const header = document.getElementsByClassName('site-header').item(0);

      siteBranding.classList.toggle('hide');
      siteNavigation.classList.toggle('show');
      header.classList.toggle('no-shadow');
  }

}
