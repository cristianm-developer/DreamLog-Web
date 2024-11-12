import { Component } from '@angular/core';
import { FirebaseAuthService } from '../../Services/firebase-auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  constructor(
    private firebaseAuth:FirebaseAuthService
  ){}

  logout(){
    this.firebaseAuth.logout();
  }
}
