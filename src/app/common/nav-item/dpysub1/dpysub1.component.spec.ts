import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dpysub1Component } from './dpysub1.component';

describe('Dpysub1Component', () => {
  let component: Dpysub1Component;
  let fixture: ComponentFixture<Dpysub1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dpysub1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dpysub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
