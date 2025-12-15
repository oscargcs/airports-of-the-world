import {createReducer, on} from '@ngrx/store';
import {login, loginFailure, loginSuccess} from './auth.actions';
import {initialAuthState} from './auth.model';

export const authReducer = createReducer(initialAuthState,
    on(login, state => ({...state, error: null, isLoading: true})),
    on(loginSuccess, (state, {user, securityKey}) => ({...state, user, securityKey, isLoading: false})),
    on(loginFailure, (state, {error}) => ({...state, error, isLoading: false}))
);

