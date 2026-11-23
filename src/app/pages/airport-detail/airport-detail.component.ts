import {Component, inject, signal, Signal} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {catchError, of, switchMap, tap} from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';
import {LoadingComponent} from '../../shared/components/loading/loading.component';
import {AirportStatus, ExtendedAirport} from '../../shared/types/airport';
import {AirportsListService} from '../airports-list-page/services/airports-list.service';
import {NgOptimizedImage} from '@angular/common';
import {AirportNotFoundComponent} from '../../shared/components/not-found-component/airport-not-found.component';

@Component({
    selector: 'app-single-airport',
    imports: [LoadingComponent, NgOptimizedImage, AirportNotFoundComponent],
    templateUrl: './airport-detail.component.html',
    styleUrl: './airport-detail.component.scss'
})
export default class AirportDetailComponent {
    private airportsListService = inject(AirportsListService);
    public route: ActivatedRoute = inject(ActivatedRoute);
    public airportStatus = signal<AirportStatus>('loading');

    public airport: Signal<ExtendedAirport | undefined> = toSignal(
        this.route.params.pipe(switchMap(({key}: Params) => this.airportsListService.getAirport(key).pipe(
            tap(() => this.airportStatus.set('success')),
            catchError(() => {
                this.airportStatus.set('error');
                return of(undefined);
            })
        )))
    );
}
