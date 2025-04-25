import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eth2Component } from './eth2.component';

describe('Eth2Component', () => {
  let component: Eth2Component;
  let fixture: ComponentFixture<Eth2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Eth2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eth2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
