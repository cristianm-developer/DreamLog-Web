import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DreamLog-web';

  flgLoadingRouter = true;

  constructor(private router: Router){
    router.events.subscribe(e => this.navigationInterceptor(e as RouterEvent));
  }

  navigationInterceptor(event: RouterEvent){
    if(event instanceof NavigationStart)
      this.flgLoadingRouter = true;
    else if(
      event instanceof NavigationCancel 
      || event instanceof NavigationEnd 
      || event instanceof NavigationCancel)
        this.flgLoadingRouter = false;
  }
}
