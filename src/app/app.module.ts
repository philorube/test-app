import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
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


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductListComponent,
    UserComponent,
    UserListComponent
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
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
