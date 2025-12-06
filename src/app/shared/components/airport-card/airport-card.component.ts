import {Component, inject, input, InputSignal} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {Airport} from 'src/app/airports-list-page/airport';
import {Router} from '@angular/router';

@Component({
    selector: 'app-airport-card',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './airport-card.component.html',
    styleUrl: './airport-card.component.scss'
})
export class AirportCardComponent {
    public router: Router = inject(Router);
    public airport: InputSignal<Airport> = input.required();

    public clickAirport(key: string): void {
        this.router.navigate(['airport/' + key]);
    }
}
