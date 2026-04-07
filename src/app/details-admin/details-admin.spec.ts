import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAdmin } from './details-admin';

describe('DetailsAdmin', () => {
  let component: DetailsAdmin;
  let fixture: ComponentFixture<DetailsAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
