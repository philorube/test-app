import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

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
  }

  ngOnInit() {
    this.profile = this.authService.userLoadedEvent
    .subscribe(user => {
      this.profile = user.profile;
    });
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
