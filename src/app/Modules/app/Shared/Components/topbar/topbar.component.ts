import { Component } from '@angular/core';
import { FirebaseAuthService } from '../../Services/firebase-auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  flgUserWithLogin = false;

  constructor(
    private firebaseAuth:FirebaseAuthService
  ){
    if(localStorage.getItem('user'))
      this.flgUserWithLogin = true;
  }

  logout(){
    this.firebaseAuth.logout();
  }
}
