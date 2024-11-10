import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Dream } from '../../../Interfaces/dream';

@Injectable({
  providedIn: 'root'
})
export class DreamsDataService {

  userId:string;

  constructor(
    private firestore: AngularFirestore,
  ) { 
    this.userId = '1' //this.firebaseAuth.getUserId()!;
  }

  async CreateDream(title:string, content:string){
    let dreamToSave = {title, content, uid: this.userId } as Dream;
    const ret = await this.firestore.collection('Dreams').add(dreamToSave).catch( 
      (error) => {throw new Error(error.message)}
    );
    return ret.id;
  }
}
