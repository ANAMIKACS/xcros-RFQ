import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPanelMobile } from './user-panel-mobile';

describe('UserPanelMobile', () => {
  let component: UserPanelMobile;
  let fixture: ComponentFixture<UserPanelMobile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPanelMobile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPanelMobile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
