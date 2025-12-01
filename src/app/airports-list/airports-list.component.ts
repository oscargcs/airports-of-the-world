import {Component, OnInit} from '@angular/core';
import {AirportsListService} from './airports-list.service';
import {Airport} from './airport';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {NavbarComponent} from "../shared/components/navbar-component/navbar.component";
import {AirportCardComponent} from "../shared/components/airport-card/airport-card.component";

@Component({
    selector: 'app-airports-list',
    templateUrl: './airports-list.component.html',
    standalone: true,
    imports: [
        NavbarComponent,
        AirportCardComponent,
        MatProgressSpinnerModule
    ],
    styleUrls: ['./airports-list.component.scss']
})
export default class AirportsListComponent implements OnInit {
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
