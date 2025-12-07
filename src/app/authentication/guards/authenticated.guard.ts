import {inject} from '@angular/core';
import {CanMatchFn, Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

export const AuthenticatedGuard: CanMatchFn = () => {
    const auth: AuthenticationService = inject(AuthenticationService);
    const router: Router = inject(Router);

    console.log('AuthGuard::token', auth.token());

    if (!auth.isAuthenticated()) {
        router.navigateByUrl('/login');
        return false;
    }

    return true;
};
