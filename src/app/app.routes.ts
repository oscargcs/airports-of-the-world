import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/airportsList',
        pathMatch: 'full'
    },
    {
        path: 'airportsList',
        loadComponent: () => import('./airports-list/airports-list.component')
    }
];

