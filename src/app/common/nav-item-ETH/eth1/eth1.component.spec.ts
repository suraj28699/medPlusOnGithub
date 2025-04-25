import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eth1Component } from './eth1.component';

describe('Eth1Component', () => {
  let component: Eth1Component;
  let fixture: ComponentFixture<Eth1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Eth1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eth1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
