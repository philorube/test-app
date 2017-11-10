import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../shared/user.service';
import { IUser } from '../shared/user';
import { userInfo } from 'os';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit {

  users: IUser[];
  filteredUsers: IUser[];


  errorMessage: string;

  _filterString: string;
  public get filterString(): string {
    return this._filterString;
  }
  public set filterString(v: string) {
    this._filterString = v;
    this.filteredUsers = this.filterString ? this.performFilter(this.filterString) : this.users;
  }

  constructor(private userService: UserService) { 
    this.filterString = '';
  }

  performFilter(filterBy: string): IUser[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.users.filter((user: IUser) =>
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
