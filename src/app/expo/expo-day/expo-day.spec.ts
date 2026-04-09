import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpoDay } from './expo-day';

describe('ExpoDay', () => {
  let component: ExpoDay;
  let fixture: ComponentFixture<ExpoDay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpoDay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpoDay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
