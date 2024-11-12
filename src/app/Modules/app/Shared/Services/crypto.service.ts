import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor() { }

  private key = environment.secretKey;

  encryptData(data:any){
    let dataString = JSON.stringify(data);
    let dataAes = CryptoJS.AES.encrypt(dataString, this.key).toString();
    return dataAes;
  }

  decryptData(data:string){
    let bytes = CryptoJS.AES.decrypt(data, this.key);
    let decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedData);
  }
}
