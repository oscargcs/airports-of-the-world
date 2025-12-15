import {inject} from '@angular/core';
import {CanMatchFn, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {first, map} from 'rxjs';
import {selectIsAuthenticated} from '../store/auth.selectors';


export const AuthenticatedGuard: CanMatchFn = () => {
    const store = inject(Store);
    const router = inject(Router);

    return store.select(selectIsAuthenticated).pipe(
        first(),
        map((isAuthenticated: boolean) => {
            if (!isAuthenticated) {
                router.navigateByUrl('/login');
                return false;
            }
            return true;
        })
    );
};

