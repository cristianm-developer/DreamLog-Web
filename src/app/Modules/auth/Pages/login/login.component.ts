import { Component } from '@angular/core';
import { FirebaseAuthService } from '../../../../Shared/Services/firebase-auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private firebaseAuth: FirebaseAuthService){}

  async login(){
    await this.firebaseAuth.loginWithEmailAndPassword('teste@testeemail.com', 'testepassword')
  }

}
