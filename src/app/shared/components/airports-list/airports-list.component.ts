import {Component, input, InputSignal} from '@angular/core';
import {Airport} from 'src/app/airports-list-page/airport';
import {AirportCardComponent} from '../airport-card/airport-card.component';

@Component({
    selector: 'app-airports-list',
    standalone: true,
    imports: [AirportCardComponent],
    templateUrl: './airports-list.component.html',
    styleUrl: './airports-list.component.scss'
})
export class AirportsListComponent {
    public airports: InputSignal<Airport[]> = input.required();
}
