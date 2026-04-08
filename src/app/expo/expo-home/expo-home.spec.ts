import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpoHome } from './expo-home';

describe('ExpoHome', () => {
  let component: ExpoHome;
  let fixture: ComponentFixture<ExpoHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpoHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpoHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
