import { TestBed } from '@angular/core/testing';

import { SuperrootGuard } from './superroot.guard';

describe('SuperrootGuard', () => {
  let guard: SuperrootGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SuperrootGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
