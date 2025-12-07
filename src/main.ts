import {enableProdMode} from '@angular/core';
import {environment} from './environments/environment';
import {provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';
import {AppComponent} from './app/app.component';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter} from '@angular/router';
import {routes} from './app/app.routes';
import {provideNoopAnimations} from '@angular/platform-browser/animations';
import {requestsInterceptor} from './app/authentication/interceptors/requests.interceptor';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routes),
        provideHttpClient(withFetch(), withInterceptors([requestsInterceptor])),
        provideNoopAnimations()
    ]
});
