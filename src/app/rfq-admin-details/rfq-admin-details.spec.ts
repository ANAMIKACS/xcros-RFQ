import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfqAdminDetails } from './rfq-admin-details';

describe('RfqAdminDetails', () => {
  let component: RfqAdminDetails;
  let fixture: ComponentFixture<RfqAdminDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RfqAdminDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfqAdminDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
