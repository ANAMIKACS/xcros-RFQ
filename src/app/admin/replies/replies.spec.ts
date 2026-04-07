import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Replies } from './replies';

describe('Replies', () => {
  let component: Replies;
  let fixture: ComponentFixture<Replies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Replies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Replies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
