import {Routes} from '@angular/router';
import {AuthenticatedGuard} from './authentication/guards/authenticated.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/airports',
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
                path: 'airports',
                loadComponent: () =>
                    import('./pages/airports-list-page/airports-list-page.component')
            },
            {
                path: 'airports/:key',
                title: 'Airport',
                loadComponent: () =>
                    import('./pages/airport-detail/./airport-detail.component')
            }
        ]
    }
];

