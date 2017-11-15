import { BrowserModule } from '@angular/platform-browser';
import { NgModule, transition } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDropdownMenuDirective } from 'ngx-bootstrap/dropdown/bs-dropdown-menu.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/product/product.component';
import { ProductListComponent } from './products/product-list/product-list.component';

import { ProductService } from './products/shared/product.service';
import { UserService } from './users/shared/user.service';
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { LoggingService } from './shared/logging.service';
import { OrgSearchComponent } from './orgs/org-search/org-search.component';
import { OrgCardComponent } from './orgs/org-card/org-card.component';
import { OrgViewComponent } from './orgs/org-view/org-view.component';
import { OrgService } from './orgs/shared/org.service';
import { RepoViewComponent } from './repos/repo-view/repo-view.component';
import { RepoListComponent } from './repos/repo-list/repo-list.component';
import { ProtectedComponent } from './protected/protected.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { AuthService } from './shared/auth.service';
import { AuthCallbackComponent } from './shared/auth-callback/auth-callback.component';


const appRoutes: Routes = [
  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuardService] },
  { path: 'home', component: HomeComponent },
  { path: 'org-search', component: OrgSearchComponent },
  { path: 'repos/:name', component: RepoListComponent },
  { path: 'auth-callback', component: AuthCallbackComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductListComponent,
    UserComponent,
    UserListComponent,
    OrgSearchComponent,
    OrgCardComponent,
    OrgViewComponent,
    RepoViewComponent,
    RepoListComponent,
    ProtectedComponent,
    AuthCallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    BsDropdownModule.forRoot()
  ],
  providers: [
    ProductService,
    UserService,
    OrgService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingService,
      multi: true
    },
    AuthGuardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
