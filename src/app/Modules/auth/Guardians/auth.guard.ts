import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { FirebaseAuthService } from '../../../Shared/Services/firebase-auth.service';

export class AuthGuard implements CanActivate {
  
  constructor(
    private firebaseAuthService: FirebaseAuthService,
    private router: Router
  ){}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if(await this.firebaseAuthService.checkAuthentication())
      return true;

    this.router.navigate([]);

    return false;
  }
}
