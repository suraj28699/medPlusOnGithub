import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dpysub3Component } from './dpysub3.component';

describe('Dpysub3Component', () => {
  let component: Dpysub3Component;
  let fixture: ComponentFixture<Dpysub3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dpysub3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dpysub3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
