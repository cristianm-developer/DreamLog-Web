import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private localstorage: LocalstorageService
  ) { }

  getUserId(){
    return this.localstorage.user.user?.uid;
  }

  async checkAuthentication(){
    return await this.afAuth.currentUser? true : false;
  }

  async loginWithEmailAndPassword(email:string, password:string){
    await this.afAuth.signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        this.localstorage.user = userCredentials;
      })
      .catch(function(error) {
        alert(error.message)
      });
  }

  async registerWithEmailAndPassword(email:string, password:string){
    await this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        this.localstorage.user = userCredentials;
      })
      .catch(function(error) {
        alert(error.message)
      });
  }

  async logout(){
    await this.afAuth.signOut();
  }

}
