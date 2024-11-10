import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(public afAuth: AngularFireAuth){}

  async login(){
    const ret = await this.afAuth.signInWithEmailAndPassword('teste@testador.com', '123456testeT');
   
  }

}
