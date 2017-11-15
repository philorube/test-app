import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AuthService } from '../shared/auth.service';
import { User } from 'oidc-client';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProtectedComponent implements OnInit {

  profile: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.profile = this.authService.getClaims();
    console.log(JSON.stringify(this.profile));
  }

}
