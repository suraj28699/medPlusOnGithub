import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dpysub2Component } from './dpysub2.component';

describe('Dpysub2Component', () => {
  let component: Dpysub2Component;
  let fixture: ComponentFixture<Dpysub2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dpysub2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dpysub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
