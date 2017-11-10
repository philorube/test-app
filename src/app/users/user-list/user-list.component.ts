import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../shared/user.service';
import { IUser } from '../shared/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit {

  users: IUser[];
  errorMessage: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(
      users => this.users = users,
      error => this.errorMessage = <any>error
    );
  }

}
