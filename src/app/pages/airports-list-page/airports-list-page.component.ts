import {Component, inject, OnInit, signal} from '@angular/core';
import {AirportsListService} from './services/airports-list.service';
import {Airport} from '../../shared/types/airport';
import {HttpErrorResponse} from '@angular/common/http';
import {AirportsListComponent} from '../airports-list/airports-list.component';
import {ErrorComponent} from '../../shared/components/error/error.component';
import {LoadingComponent} from '../../shared/components/loading/loading.component';

@Component({
    selector: 'app-airports-list-page',
    templateUrl: './airports-list-page.component.html',
    imports: [
        AirportsListComponent,
        ErrorComponent,
        LoadingComponent
    ],
    styleUrls: ['./airports-list-page.component.scss']
})
export default class AirportsListPageComponent implements OnInit {
    public airportsList = signal<Airport[] | undefined>(undefined);
    public error = signal<string | null>(null);

    private airportsListService = inject(AirportsListService);

    public ngOnInit(): void {
        this.airportsListService.getAllAirports().subscribe({
            next: (res: Airport[] | undefined) => {
                this.airportsList.set(res);
            },
            error: (error: HttpErrorResponse) => {
                this.error.set(error.message);
            }
        });
    }
}
