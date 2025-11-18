import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WateringComponent } from './watering'; // Import WateringComponent

describe('WateringComponent', () => {
  let component: WateringComponent;
  let fixture: ComponentFixture<WateringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WateringComponent] // Use WateringComponent
    })
    .compileComponents();

    fixture = TestBed.createComponent(WateringComponent); // Create WateringComponent
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});