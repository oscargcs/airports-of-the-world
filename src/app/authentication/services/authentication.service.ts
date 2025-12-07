import {computed, inject, Injectable, signal} from '@angular/core';
import {catchError, map, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AuthResponse} from '../types/auth-response';
import {User} from '../types/user';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private http = inject(HttpClient);
    private readonly API_URL: string = environment.baseUrl;

    private _user = signal<User | null>(null);
    private _token = signal<string | null>(localStorage.getItem('token'));

    // Getters
    user = computed(() => this._user());
    token = computed(() => this._token());
    isAuthenticated = computed(() => !!this._token());

    login(username: string, password: string): Observable<boolean> {
        return this.http.post<AuthResponse>(`${this.API_URL}/login`, {username, password}).pipe(
            map((res: AuthResponse) => {
                this._user.set(res.user);
                this._token.set(res.securityKey);
                localStorage.setItem('token', res.securityKey);
                return true;
            }),
            catchError(() => of(false))
        );
    }

    logout(): void {
        this._user.set(null);
        this._token.set(null);
        localStorage.removeItem('token');
    }
}
