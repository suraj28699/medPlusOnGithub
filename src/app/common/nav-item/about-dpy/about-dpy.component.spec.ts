import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDPYComponent } from './about-dpy.component';

describe('AboutDPYComponent', () => {
  let component: AboutDPYComponent;
  let fixture: ComponentFixture<AboutDPYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutDPYComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutDPYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
