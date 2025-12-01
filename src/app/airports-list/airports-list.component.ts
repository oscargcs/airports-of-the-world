import {Component, OnInit} from '@angular/core';
import {AirportsListService} from './airports-list.service';
import {Airport} from './airport';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";

@Component({
    selector: 'app-airports-list',
    templateUrl: './airports-list.component.html',
    standalone: true,
    imports: [
        MatCardModule,
        MatToolbarModule,
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

    public async clickAirport(key: string): Promise<void> {
        const airport = await this.airportsListService.getAirport(key);
        console.log(airport);
    }

}
