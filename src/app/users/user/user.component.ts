import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { IUser } from '../shared/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserComponent implements OnInit {

  @Input() user: IUser;

  constructor() { }

  ngOnInit() {
  }

}
