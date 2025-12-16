import {Component, inject, Signal} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {switchMap} from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';
import {LoadingComponent} from '../../shared/components/loading/loading.component';
import {ExtendedAirport} from '../../shared/types/airport';
import {AirportsListService} from '../airports-list-page/services/airports-list.service';

@Component({
    selector: 'app-single-airport',
    imports: [LoadingComponent],
    templateUrl: './single-airport.component.html',
    styleUrl: './single-airport.component.scss'
})
export default class SingleAirportComponent {
    private airportsListService = inject(AirportsListService);

    public route: ActivatedRoute = inject(ActivatedRoute);
    public airport: Signal<ExtendedAirport | undefined> = toSignal(
        this.route.params.pipe(
            switchMap(({key}: Params) => this.airportsListService.getAirport(key))
        )
    );
}
