import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Airport, ExtendedAirport} from '../airport';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class AirportsListService {

    private http = inject(HttpClient);
    private readonly API_URL: string = environment.baseUrl;

    public getAllAirports(): Observable<Airport[] | undefined> {
        return this.http.get<Airport[]>(`${this.API_URL}/allAirports`);
    }

    public getAirport(airportKey: string): Observable<ExtendedAirport | undefined> {
        return this.http.post<ExtendedAirport>(`${this.API_URL}/airport`, {key: airportKey});
    }

}
