import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/airportsList',
        pathMatch: 'full'
    },
    {
        path: 'airportsList',
        loadComponent: () => import('./airports-list-page/airports-list-page.component')
    },
    {
        path: 'airport/:key',
        title: 'Airport',
        loadComponent: () => import('./shared/components/single-airport/./single-airport.component'),
    },
];

