import { TestBed } from '@angular/core/testing';

import { CanDeactGuard } from './can-deact.guard';

describe('CanDeactGuard', () => {
  let guard: CanDeactGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeactGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
