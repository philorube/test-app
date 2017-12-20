import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Profile } from 'selenium-webdriver/firefox';
import { environment } from '../environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  profile: any;

  constructor(private authService: AuthService) {
    /* if (this.authService.getClaims()) {
      this.profile = this.authService.getClaims();
    } else {
      this.authService.getSigninRedirectCallbackPromise().then(user => {
        this.profile = user.profile;
      });
    } */
  }

  ngOnInit() {
    console.log(environment.apiUrl);
    console.log('AWS KEY: ');
  }

  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }
}
