import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Airport, ExtendedAirport} from './airport';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AirportsListService {

    private http: HttpClient = inject(HttpClient);
    private readonly API_URL: string = 'http://localhost:1500/';

    public getAllAirports(): Observable<Airport[] | undefined> {
        return this.http.get<Airport[]>(`${this.API_URL}/allAirports`, {
            headers: {securityKey: 'key'} //todo: add to all requests in an interceptor
        });
    }

    public getAirport(airportKey: string): Observable<ExtendedAirport | undefined> {
        return this.http.post<ExtendedAirport>(`${this.API_URL}/airport`, {key: airportKey}, {
            headers: {securityKey: 'key'} //todo: add to all requests in an interceptor
        });
    }

}
