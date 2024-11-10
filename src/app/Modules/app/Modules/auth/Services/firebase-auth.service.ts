import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LocalstorageService } from '../../../Shared/Services/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private localstorage: LocalstorageService
  ) { }

  async loginWithEmailAndPassword(email:string, password:string){
    const ret = await this.afAuth.signInWithEmailAndPassword(email, password)
      .catch((error) => {
        throw error.message;
      });

    this.localstorage.user = ret;
  }

  async registerWithEmailAndPassword(email:string, password:string){
    const ret = await this.afAuth.createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        throw error.message
      });

    this.localstorage.user = ret!;      
  }

  async logout(){
    await this.afAuth.signOut();
  }

}
