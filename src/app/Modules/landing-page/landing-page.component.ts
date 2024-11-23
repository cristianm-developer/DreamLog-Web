import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  flgUserWithLogin = false;

  constructor(){
    this.flgUserWithLogin = localStorage.getItem('user')? true : false;
  }

}
