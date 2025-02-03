import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Airport} from './airport';

@Injectable({providedIn: 'root'})
export class AirportsListService {

    constructor(private http: HttpClient) {
    }

    public getAllAirports(): Promise<Airport[] | undefined> {
        const url = 'http://localhost:1500/allAirports';
        return this.http.get<Airport[]>(url).toPromise();
    }

    public getAirport(airportKey: string): Promise<Airport | undefined> {
        const url = 'http://localhost:1500/airport';
        return this.http.post<Airport>(url, {key: airportKey}).toPromise();
    }

}
