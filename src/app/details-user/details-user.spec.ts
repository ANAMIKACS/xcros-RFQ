import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsUser } from './details-user';

describe('DetailsUser', () => {
  let component: DetailsUser;
  let fixture: ComponentFixture<DetailsUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
