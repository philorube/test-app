import { User } from '../users/shared/user';

export enum UserActionTypes {
    LoadUsers = 'Load Users',
    LoadUsersSuccess = 'Load Users Success'
}

// export const LOAD_USERS = 'LOAD_USERS';
// export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';

export class LoadUsersAction {
    readonly type = UserActionTypes.LoadUsers;
    constructor() { }
}

export class LoadUsersSuccessAction {
    readonly type = UserActionTypes.LoadUsersSuccess;
    constructor(public payload: User[]) { }
}

export type UserActions =
    LoadUsersAction
    | LoadUsersSuccessAction;
