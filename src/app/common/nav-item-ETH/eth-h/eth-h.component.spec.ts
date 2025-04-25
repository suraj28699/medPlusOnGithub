import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthHComponent } from './eth-h.component';

describe('EthHComponent', () => {
  let component: EthHComponent;
  let fixture: ComponentFixture<EthHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EthHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EthHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
