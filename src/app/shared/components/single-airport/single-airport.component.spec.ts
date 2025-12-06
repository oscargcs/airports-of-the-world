import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAirportComponent } from './single-airport.component';

describe('SingleAirportComponent', () => {
  let component: SingleAirportComponent;
  let fixture: ComponentFixture<SingleAirportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleAirportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleAirportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
