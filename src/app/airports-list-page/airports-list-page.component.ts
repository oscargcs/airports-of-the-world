import {Component, OnInit} from '@angular/core';
import {AirportsListService} from './airports-list.service';
import {Airport} from './airport';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {NavbarComponent} from "../shared/components/navbar-component/navbar.component";
import {AirportCardComponent} from "../shared/components/airport-card/airport-card.component";
import { AirportsListComponent } from "../shared/components/airports-list/airports-list.component";
import { ErrorComponent } from "../shared/components/error/error.component";
import { LoadingComponent } from "../shared/components/loading/loading.component";

@Component({
    selector: 'app-airports-list-page',
    templateUrl: './airports-list-page.component.html',
    standalone: true,
    imports: [
        NavbarComponent,
        AirportsListComponent,
        ErrorComponent,
        LoadingComponent
    ],
    styleUrls: ['./airports-list-page.component.scss']
})
export default class AirportsListPageComponent implements OnInit {
    public airportsList?: Airport[];
    public error?: string;

    constructor(private airportsListService: AirportsListService) {
    }

    public ngOnInit(): void {
        this.airportsListService.getAllAirports().then((res) => {
            this.airportsList = res;
        }).catch((error) => {
            this.error = error.message;
        });
    }
}
