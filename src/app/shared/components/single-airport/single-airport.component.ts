import {Component, inject, Signal} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {AirportsListService} from '../../../airports-list-page/airports-list.service';
import {switchMap} from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';
import {LoadingComponent} from '../loading/loading.component';
import {NavbarComponent} from '../navbar-component/navbar.component';
import {ExtendedAirport} from '../../../airports-list-page/airport';
import {FooterComponent} from '../footer/footer.component';

@Component({
    selector: 'app-single-airport',
    standalone: true,
    imports: [
        LoadingComponent,
        NavbarComponent,
        FooterComponent
    ],
    templateUrl: './single-airport.component.html',
    styleUrl: './single-airport.component.scss'
})
export default class SingleAirportComponent {
    private airportsListService: AirportsListService = inject(AirportsListService);

    public route: ActivatedRoute = inject(ActivatedRoute);
    public airport: Signal<ExtendedAirport | undefined> = toSignal(
        this.route.params.pipe(
            switchMap(({key}: Params) => this.airportsListService.getAirport(key))
        )
    );
}
