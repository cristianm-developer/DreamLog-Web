import { Component, isDevMode } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DreamLog-web';
  flgLoading = true;
  flgFirstLoad = false;

  constructor(private router: Router){
    router.events.subscribe(e => this.navigationInterceptor(e as RouterEvent));
  }

  navigationInterceptor(event: RouterEvent){ 
    if(this.flgFirstLoad)
      return;

    if(event instanceof NavigationStart){
      var el = document.querySelector('#LoadingScreen')
      if(el) el.className = 'active';
    }
    else if(
      event instanceof NavigationCancel 
      || event instanceof NavigationEnd 
      || event instanceof NavigationCancel)
        {
          setTimeout(() => {
            var el = document.querySelector('#LoadingScreen')
            if(el) el.className = '';
            this.flgFirstLoad = true;
          }, 500);
        }
  }
}
