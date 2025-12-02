import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Airport} from './airport';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AirportsListService {

    private http: HttpClient = inject(HttpClient);

    public getAllAirports(): Observable<Airport[] | undefined> {
        const url = 'http://localhost:1500/allAirports';
        return this.http.get<Airport[]>(url, {
            headers: {securityKey: 'key'} //todo: add to all requests in an interceptor
        });
    }

    public getAirport(airportKey: string): Observable<Airport | undefined> {
        const url = 'http://localhost:1500/airport';
        return this.http.post<Airport>(url, {key: airportKey});
    }

}
