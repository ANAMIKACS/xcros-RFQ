import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpoDetails } from './expo-details';

describe('ExpoDetails', () => {
  let component: ExpoDetails;
  let fixture: ComponentFixture<ExpoDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpoDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpoDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
