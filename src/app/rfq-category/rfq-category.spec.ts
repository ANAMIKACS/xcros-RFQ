import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfqCategory } from './rfq-category';

describe('RfqCategory', () => {
  let component: RfqCategory;
  let fixture: ComponentFixture<RfqCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RfqCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfqCategory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
