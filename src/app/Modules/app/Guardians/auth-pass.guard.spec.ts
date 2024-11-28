import { TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { authPass } from './auth-pass.guard';

describe('authPassGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authPass(...guardParameters));

  let routerSpy: jasmine.SpyObj<Router>; 
  let mockRoute: ActivatedRouteSnapshot = {
      url: [],
      params: {},
      queryParams: {},
      fragment: null,
      data: {},
      outlet: '',
      component: null,
      routeConfig: null,
      title: undefined,
      root: new ActivatedRouteSnapshot,
      parent: null,
      firstChild: null,
      children: [],
      pathFromRoot: [],
      paramMap: {
        has: function (name: string): boolean {
          throw new Error('Function not implemented.');
        },
        get: function (name: string): string | null {
          throw new Error('Function not implemented.');
        },
        getAll: function (name: string): string[] {
          throw new Error('Function not implemented.');
        },
        keys: []
      },
      queryParamMap: {
        has: function (name: string): boolean {
          throw new Error('Function not implemented.');
        },
        get: function (name: string): string | null {
          throw new Error('Function not implemented.');
        },
        getAll: function (name: string): string[] {
          throw new Error('Function not implemented.');
        },
        keys: []
      } 
    }

  let mockState: RouterStateSnapshot = {
    url: '',
    root: new ActivatedRouteSnapshot
  };

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerSpy}
      ]
    });
    localStorage.clear();
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should reject access to auth zone if there is an user in localstorage',  () => {

    TestBed.runInInjectionContext( () => {
      const result = authPass(mockRoute, mockState);
      expect(result).toBeTrue();
      expect(routerSpy.navigate).not.toHaveBeenCalled();
    })
  });
  
  it('should authorize acess to auth zone if there isnt an user on localstorage', () => {
    TestBed.runInInjectionContext( () => {
      localStorage.setItem('user', 'testUser');
      const result = authPass(mockRoute, mockState);
      expect(result).toBeFalse();
      expect(routerSpy.navigate).toHaveBeenCalledWith(['app']);
    })
  })
});
