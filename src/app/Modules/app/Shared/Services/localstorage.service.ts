import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';


@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  set user(value:firebase.auth.UserCredential|undefined)
  {
    if(!value)
      localStorage.removeItem('user');
    else
      localStorage.setItem('user', JSON.stringify(value));
  }
  
  get user(){
    let user = localStorage.getItem('user');
    return user? JSON.parse(user) : null
  }

  get uid(){
    return this.user?.user?.uid;
  }
}
