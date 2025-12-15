import {catchError, map, Observable, of, switchMap, tap} from 'rxjs';
import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {login, loginFailure, loginSuccess, logout} from './auth.actions';
import {AuthenticationService} from '../services/authentication.service';
import {AuthResponse} from '../types/auth-response';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {AUTH_STORAGE_KEYS} from '../types/auth-storage.keys';

@Injectable()
export class AuthEffects {
    authenticationService = inject(AuthenticationService);
    actions$ = inject(Actions);
    router = inject(Router);

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            switchMap(({username, password}) => {
                const authResponseObservable: Observable<AuthResponse> = this.authenticationService.login(username, password);

                return authResponseObservable.pipe(
                    map(({user, securityKey}) => loginSuccess({user, securityKey})),
                    catchError((error: HttpErrorResponse) => of(loginFailure({error: error.error.message})))
                );
            })
        )
    );

    storeLogin$ = createEffect(() =>
            this.actions$.pipe(
                ofType(loginSuccess),
                tap(({user, securityKey}) => {
                    localStorage.setItem(AUTH_STORAGE_KEYS.SECURITY_KEY, securityKey);
                    localStorage.setItem(AUTH_STORAGE_KEYS.USER, JSON.stringify(user));
                })
            ),
        {dispatch: false}
    );

    navigateToHome$ = createEffect(() =>
            this.actions$.pipe(
                ofType(loginSuccess),
                tap(() => {
                    this.router.navigateByUrl('/');
                })
            ),
        {dispatch: false}
    );

    clearLogin$ = createEffect(() =>
            this.actions$.pipe(
                ofType(logout),
                tap(() => {
                    localStorage.removeItem(AUTH_STORAGE_KEYS.SECURITY_KEY);
                    localStorage.removeItem(AUTH_STORAGE_KEYS.USER);
                })
            ),
        {dispatch: false}
    );

    navigateToLogin$ = createEffect(() =>
            this.actions$.pipe(
                ofType(logout),
                tap(() => {
                    this.router.navigateByUrl('/login');
                })
            ),
        {dispatch: false}
    );
}
