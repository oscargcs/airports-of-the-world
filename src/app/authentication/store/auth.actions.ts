import {createAction, props} from '@ngrx/store';
import {User} from '../types/user';

export const login = createAction(
    '[Auth] User Login',
    props<{ username: string, password: string }>()
);

export const loginSuccess = createAction(
    '[Auth] Login Success',
    props<{ user: User, securityKey: string }>()
);

export const loginFailure = createAction(
    '[Auth] Login Failure',
    props<{ error: string }>()
);

export const logout = createAction(
    '[Auth] Logout'
);
