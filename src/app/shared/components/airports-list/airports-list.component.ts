import {Component, input, InputSignal} from '@angular/core';
import {Airport} from 'src/app/airports-list-page/airport';
import {AirportCardComponent} from '../airport-card/airport-card.component';
import {SideMenuComponent} from '../side-menu/side-menu.component';

@Component({
    selector: 'app-airports-list',
    imports: [AirportCardComponent, SideMenuComponent],
    templateUrl: './airports-list.component.html',
    styleUrl: './airports-list.component.scss'
})
export class AirportsListComponent {
    public airports: InputSignal<Airport[]> = input.required();
}
