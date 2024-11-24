import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { authPass } from './auth-pass.guard';

describe('authPassGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authPass(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
