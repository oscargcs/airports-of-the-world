import {HttpHandlerFn, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {inject} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

export const requestsInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
    const authService: AuthenticationService = inject(AuthenticationService);
    const securityKey: string | null = authService.token();

    if (securityKey) {
        const clonedReq: HttpRequest<unknown> = req.clone({setHeaders: {securityKey}});
        return next(clonedReq);
    }
    return next(req);
};
