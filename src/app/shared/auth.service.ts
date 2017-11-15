import { Injectable, EventEmitter } from '@angular/core';
import { UserManager, UserManagerSettings, User } from 'oidc-client';

@Injectable()
export class AuthService {

  private manager = new UserManager(getClientSettings());
  private user: User = null;
  userLoadedEvent: EventEmitter<User> = new EventEmitter<User>();

  constructor() {
    this.manager.getUser().then(user => {
      this.user = user;
      this.userLoadedEvent.emit(user);
    });

    this.manager.events.addUserLoaded((user) => {
      this.user = user;
	 // this.loggedIn = !(user === undefined);
    });
  }

  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  getClaims(): any {
    return this.user.profile;
  }

  getAuthorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  startAuthentication(): Promise<void> {
    return this.manager.signinRedirect();
  }

  completeAuthentication(): Promise<void> {
    return this.manager.signinRedirectCallback().then(user => {
        this.user = user;

        console.log(JSON.stringify(this.user));
    });
  }
}

export function getClientSettings(): UserManagerSettings {
  return {
      authority: 'http://localhost:5555/',
      client_id: 'angular_spa',
      redirect_uri: 'http://localhost:4200/auth-callback',
      post_logout_redirect_uri: 'http://localhost:4200/',
      response_type:"id_token token",
      scope: 'openid profile address email api1',
      filterProtocolClaims: true,
      loadUserInfo: true
  };
}