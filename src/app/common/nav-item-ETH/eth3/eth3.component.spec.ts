import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eth3Component } from './eth3.component';

describe('Eth3Component', () => {
  let component: Eth3Component;
  let fixture: ComponentFixture<Eth3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Eth3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eth3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
