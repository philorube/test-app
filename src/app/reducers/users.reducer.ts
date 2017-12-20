import { UserActionTypes, UserActions } from './../actions/users.actions';

export function usersReducer(state = [], action: UserActions) {
    switch (action.type) {
        case UserActionTypes.LoadUsersSuccess: {
            return action.payload;
        }
        default : {
            return state;
        }
    }
}