import {enableProdMode} from '@angular/core';
import {environment} from './environments/environment';
import {provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';
import {AppComponent} from './app/app.component';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter} from '@angular/router';
import {routes} from './app/app.routes';
import {requestsInterceptor} from './app/authentication/interceptors/requests.interceptor';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {provideEffects} from '@ngrx/effects';
import {provideStore} from '@ngrx/store';
import {authReducer} from './app/authentication/store/auth.reducer';
import {AuthEffects} from './app/authentication/store/auth.effects';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routes),
        provideHttpClient(withFetch(), withInterceptors([requestsInterceptor])),
        provideStore({auth: authReducer}),
        provideEffects([AuthEffects]),
        provideStoreDevtools()
    ]
});
