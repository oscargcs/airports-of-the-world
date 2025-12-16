import {Component, input, InputSignal} from '@angular/core';
import {AirportCardComponent} from '../../shared/components/airport-card/airport-card.component';
import {Airport} from '../../shared/types/airport';

@Component({
    selector: 'app-airports-list',
    imports: [AirportCardComponent],
    templateUrl: './airports-list.component.html',
    styleUrl: './airports-list.component.scss'
})
export class AirportsListComponent {
    public airports: InputSignal<Airport[]> = input.required();
}
