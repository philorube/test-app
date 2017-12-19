import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/app-state';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserListComponent implements OnInit {

  users: User[];
  filteredUsers: User[];
  errorMessage: string;

  _filterString: string;
  public get filterString(): string {
    return this._filterString;
  }
  public set filterString(v: string) {
    this._filterString = v;
    this.filteredUsers = this.filterString ? this.performFilter(this.filterString) : this.users;
  }

  constructor(private store: Store<AppState>) {
    this.filterString = '';
  }

  performFilter(filterBy: string): User[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.users.filter((user: User) =>
      user.login.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(
      users => this.users = users,
      error => this.errorMessage = <any>error,
      () => this.filteredUsers = this.users
    );
  }

}
