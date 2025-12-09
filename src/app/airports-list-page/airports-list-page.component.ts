import {Component, OnInit, signal} from '@angular/core';
import {AirportsListService} from './airports-list.service';
import {Airport} from './airport';
import {NavbarComponent} from '../shared/components/navbar-component/navbar.component';
import {AirportsListComponent} from '../shared/components/airports-list/airports-list.component';
import {ErrorComponent} from '../shared/components/error/error.component';
import {LoadingComponent} from '../shared/components/loading/loading.component';
import {FooterComponent} from '../shared/components/footer/footer.component';

@Component({
    selector: 'app-airports-list-page',
    templateUrl: './airports-list-page.component.html',
    standalone: true,
    imports: [
        NavbarComponent,
        AirportsListComponent,
        ErrorComponent,
        LoadingComponent,
        FooterComponent
    ],
    styleUrls: ['./airports-list-page.component.scss']
})
export default class AirportsListPageComponent implements OnInit {
    public airportsList = signal<Airport[] | undefined>(undefined);
    public error = signal<string | null>(null);

    constructor(private airportsListService: AirportsListService) {
    }

    public ngOnInit(): void {
        this.airportsListService.getAllAirports().subscribe({
            next: (res: Airport[] | undefined) => {
                this.airportsList.set(res);
            },
            error: (error) => {
                this.error.set(error.message);
            }
        });
    }
}
