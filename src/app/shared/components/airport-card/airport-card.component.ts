import {Component, inject, input, InputSignal} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {Router} from '@angular/router';
import {Airport} from '../../types/airport';

@Component({
    selector: 'app-airport-card',
    imports: [MatCardModule],
    templateUrl: './airport-card.component.html',
    styleUrl: './airport-card.component.scss'
})
export class AirportCardComponent {
    private router = inject(Router);
    public airport: InputSignal<Airport> = input.required();

    public clickAirport(key: string): void {
        this.router.navigate(['airports/' + key]);
    }
}
