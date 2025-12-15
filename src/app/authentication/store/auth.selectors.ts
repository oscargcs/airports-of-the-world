import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthState} from './auth.model';

export const selectAuthState =
    createFeatureSelector<AuthState>('auth');

export const selectIsAuthenticated = createSelector(
    selectAuthState,
    (state: AuthState) => !!state.securityKey
);

export const selectSecurityKey = createSelector(
    selectAuthState,
    (state: AuthState) => state.securityKey
);

export const selectUser = createSelector(
    selectAuthState,
    (state: AuthState) => state.user
);

export const selectError = createSelector(
    selectAuthState,
    (state: AuthState) => state.error
);

export const selectIsLoading = createSelector(
    selectAuthState,
    (state: AuthState) => state.isLoading
);


