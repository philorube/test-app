import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { UserService } from '../users/shared/user.service';
import { Effect, Actions } from '@ngrx/effects';
import { User } from '../users/shared/user';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { UserActions, LoadUsersSuccessAction, UserActionTypes } from './../actions/users.actions';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserEffectsService {

    constructor(
        private userService: UserService,
        private actions: Actions
    ) { }


    @Effect()
    loadUsers$: Observable<Action> = this.actions
      .ofType(UserActionTypes.LoadUsers)
      .switchMap(() => {
            return this.userService.getUsers()
                .map((books: User[]) => new LoadUsersSuccessAction(books));
      }
    );



   /*  @Effect() loadUsers = this.actions
        .pipe(
            ofType(userActions.LOAD_USERS),
            map(action => action.payload),
            switchMap(() => {
                return this.userService.getUsers()
                .map(users => )
            })
        )

        .ofType<User[]>(userActions.LOAD_USERS)
        .pipe(

        )
        .switchMap(() => {
            return this.userService.getUsers()
                .map(users => new userActions.LoadUsersSuccessAction(users));
        }); */
}
