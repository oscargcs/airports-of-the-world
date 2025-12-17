import {Component, inject, Signal} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {first, switchMap} from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';
import {LoadingComponent} from '../../shared/components/loading/loading.component';
import {ExtendedAirport} from '../../shared/types/airport';
import {AirportsListService} from '../airports-list-page/services/airports-list.service';
import {NgOptimizedImage} from '@angular/common';

@Component({
    selector: 'app-single-airport',
    imports: [LoadingComponent, NgOptimizedImage],
    templateUrl: './airport-detail.component.html',
    styleUrl: './airport-detail.component.scss'
})
export default class AirportDetailComponent {
    private airportsListService = inject(AirportsListService);
    public route: ActivatedRoute = inject(ActivatedRoute);

    public airport: Signal<ExtendedAirport | undefined> = toSignal(
        this.route.params.pipe(
            first(),
            switchMap(({key}: Params) => this.airportsListService.getAirport(key))
        )
    );
}
