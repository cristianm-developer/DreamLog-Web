import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { CryptoService } from './crypto.service';


@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor(
    private cryptoService: CryptoService
  ) { }

  private setLocalStorage(key:string, data:any){
    if(!data)
      localStorage.removeItem(key);
    else
      localStorage.setItem(key, this.cryptoService.encryptData(data));
  }

  private getLocalStorage(key:string){
    let userCrypted = localStorage.getItem(key);
    return userCrypted? this.cryptoService.decryptData(userCrypted!) : null
  }

  private setSessionStorage(key:string, data:any){
    if(data)
      sessionStorage.removeItem(key);
    else
      sessionStorage.setItem(key, this.cryptoService.encryptData(data));
  }

  private getSessionStorage(key:string){
    let userCrypted = sessionStorage.getItem(key);
    return userCrypted? this.cryptoService.decryptData(userCrypted!) : null
  }

  set user(value:firebase.auth.UserCredential|undefined)
  {
    this.setLocalStorage('user', value);
  }
  
  get user(){
    return this.getLocalStorage('user')
  }

  get uid(){
    return this.user?.user?.uid;
  }
}
