import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfqForm } from './rfq-form';

describe('RfqForm', () => {
  let component: RfqForm;
  let fixture: ComponentFixture<RfqForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RfqForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfqForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
