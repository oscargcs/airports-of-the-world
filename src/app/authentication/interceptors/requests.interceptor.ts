import {HttpHandlerFn, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {first, switchMap} from 'rxjs';
import {selectSecurityKey} from '../store/auth.selectors';

export const requestsInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
    const store = inject(Store);

    return store.select(selectSecurityKey).pipe(
        first(),
        switchMap((securityKey: string | null) => {
            if (!securityKey) {
                return next(req);
            }

            const clonedReq: HttpRequest<unknown> = req.clone({setHeaders: {securityKey}});
            return next(clonedReq);
        })
    );
};
