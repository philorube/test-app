import * as userActions from './../actions/users.actions'

export function usersReducer(state = [], action: userActions.Action) {
    switch(action.type) {
        case userActions.LOAD_USERS_SUCCESS: {
            return action.payload;
        }
        default : {
            return state;
        }
    }
}