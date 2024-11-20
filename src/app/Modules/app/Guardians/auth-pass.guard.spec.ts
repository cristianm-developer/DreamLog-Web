import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authPassGuard } from './auth-pass.guard';

describe('authPassGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authPassGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
