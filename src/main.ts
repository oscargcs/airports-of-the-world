import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { HttpClientModule, provideHttpClient, withFetch } from "@angular/common/http";
import { AppComponent } from "./app/app.component";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { routes } from "./app/app.routes";
import { provideNoopAnimations } from "@angular/platform-browser/animations";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routes),
        provideHttpClient(withFetch()),
        provideNoopAnimations()
    ]
});
