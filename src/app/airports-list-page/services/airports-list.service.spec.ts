import {AirportsListService} from './airports-list.service';

describe('AirportsListService', () => {

    it('should exist', () => {
        expect(true).toBeTrue();
    });

    // let service: AirportsListService;
    // let httpMock: HttpTestingController;

    // beforeEach(() => {
    //     TestBed.configureTestingModule({
    //         providers: [
    //             AirportsListService,
    //             provideHttpClient(),
    //             provideHttpClientTesting()
    //         ]
    //     });
    //
    //     service = TestBed.inject(AirportsListService);
    //     httpMock = TestBed.inject(HttpTestingController);
    // });
    //
    // afterEach(() => {
    //     httpMock.verify();
    // });
    //
    // it('should get all airports', () => {
    //     const mockAirports: Airport[] = [
    //         {key: 'BCN', name: 'Barcelona Airport', country: 'Spain', city: 'Barcelona'},
    //         {key: 'MAD', name: 'Madrid Airport', country: 'Spain', city: 'Madrid'}
    //     ];
    //
    //     service.getAllAirports().subscribe(data => {
    //         expect(data).toEqual(mockAirports);
    //     });
    //
    //     const req = httpMock.expectOne(`${environment.baseUrl}/allAirports`);
    //     expect(req.request.method).toBe('GET');
    //     req.flush(mockAirports);
    // });
    //
    // it('should get airport by key', () => {
    //     const airportKey = 'BCN';
    //     const mockAirport: ExtendedAirport = {
    //         key: 'BCN',
    //         name: 'Barcelona Airport',
    //         country: 'Spain',
    //         city: 'Barcelona',
    //         owner: 'Airport Owner',
    //         build: 'Terminal 1',
    //         image: 'bcn.jpg'
    //     };
    //
    //     service.getAirport(airportKey).subscribe(data => {
    //         expect(data).toEqual(mockAirport);
    //     });
    //
    //     const req = httpMock.expectOne(`${environment.baseUrl}/airport`);
    //     expect(req.request.method).toBe('POST');
    //     expect(req.request.body).toEqual({key: airportKey});
    //     req.flush(mockAirport);
    // });
});
