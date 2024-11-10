import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  
  constructor(
    private router: Router
  ){}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if(localStorage.getItem('user'))
      return true;

    this.router.navigate(['app', 'auth']);

    return false;
  }
}
