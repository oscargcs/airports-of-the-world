import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AuthResponse} from '../types/auth-response';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
    private http: HttpClient = inject(HttpClient);
    private readonly API_URL: string = environment.baseUrl;

    login(username: string, password: string): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(`${this.API_URL}/login`, {username, password});
    }
}
