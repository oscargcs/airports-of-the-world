import {AirportsListService} from './airports-list.service';
import {environment} from '../../../environments/environment';
import {Airport, ExtendedAirport} from '../airport';
import {HttpTestingController, provideHttpClientTesting, TestRequest} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {provideHttpClient} from '@angular/common/http';

describe('AirportsListService', () => {
    let airportsListService: AirportsListService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                AirportsListService,
                provideHttpClient(),
                provideHttpClientTesting()
            ]
        });

        airportsListService = TestBed.inject(AirportsListService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should get all airports', () => {
        const mockAirports: Airport[] = [
            {key: 'BCN', name: 'Barcelona airport', country: 'Spain', city: 'Barcelona'},
            {key: 'MAD', name: 'Madrid airport', country: 'Spain', city: 'Madrid'}
        ];

        airportsListService.getAllAirports().subscribe((data: Airport[] | undefined) => {
            expect(data).toEqual(mockAirports);
        });

        const req: TestRequest = httpMock.expectOne(`${environment.baseUrl}/allAirports`);
        expect(req.request.method).toBe('GET');
        req.flush(mockAirports);
    });

    it('should get airport by key', () => {
        const airportKey: string = 'BCN';
        const mockAirport: ExtendedAirport = {
            key: 'BCN',
            name: 'Barcelona El Prat',
            country: 'Spain',
            city: 'Barcelona',
            owner: 'Airport owner',
            build: 'Terminal 1',
            image: 'bcn.jpg'
        };

        airportsListService.getAirport(airportKey).subscribe((data: ExtendedAirport | undefined) => {
            expect(data).toEqual(mockAirport);
        });

        const req: TestRequest = httpMock.expectOne(`${environment.baseUrl}/airport`);
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual({key: airportKey});
        req.flush(mockAirport);
    });
});
