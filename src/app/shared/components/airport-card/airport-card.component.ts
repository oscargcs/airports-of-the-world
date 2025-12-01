import { Component, inject, input, InputSignal } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { Airport } from "src/app/airports-list/airport";
import { AirportsListService } from "src/app/airports-list/airports-list.service";

@Component({
  selector: 'app-airport-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './airport-card.component.html',
  styleUrl: './airport-card.component.scss'
})
export class AirportCardComponent {
    private airportsListService: AirportsListService = inject(AirportsListService);
    airport: InputSignal<Airport>= input.required()

    public async clickAirport(key: string): Promise<void> {
        const airport = await this.airportsListService.getAirport(key);
        console.log(airport);
    }
}
