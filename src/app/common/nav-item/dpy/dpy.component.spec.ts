import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpyComponent } from './dpy.component';

describe('DpyComponent', () => {
  let component: DpyComponent;
  let fixture: ComponentFixture<DpyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DpyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
