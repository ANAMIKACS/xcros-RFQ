import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfqListing } from './rfq-listing';

describe('RfqListing', () => {
  let component: RfqListing;
  let fixture: ComponentFixture<RfqListing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RfqListing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfqListing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
