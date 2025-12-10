import {Routes} from '@angular/router';
import {AuthenticatedGuard} from './authentication/guards/authenticated.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/airportsList',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () => import('./authentication/components/login/login.component')
    },
    {
        path: '',
        loadComponent: () => import('./layouts/main-layout/main-layout.component'),
        canMatch: [AuthenticatedGuard],
        children: [
            {
                path: 'airportsList',
                loadComponent: () =>
                    import('./airports-list-page/airports-list-page.component')
            },
            {
                path: 'airport/:key',
                title: 'Airport',
                loadComponent: () =>
                    import('./shared/components/single-airport/single-airport.component')
            }
        ]
    }
];

