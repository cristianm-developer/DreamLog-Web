import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Dream, DreamFilter } from '../../../Interfaces/dream';
import { collection, getDocs, initializeFirestore, query, where } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import { LocalstorageService } from '../../../Shared/Services/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class DreamsDataService {

  userId:string;

  constructor(
    private localstorageService: LocalstorageService,
    private firestore: AngularFirestore,
  ) { 
    this.userId = this.localstorageService.uid!;
  }

  async saveDream(dream: Dream){
    const ret = await this.firestore.collection('Dreams').add(dream).catch( 
      (error) => {throw new Error(error.message)}
    );
    return ret.id;
  }

  async loadDreams(filter: DreamFilter){
    let db =  firebase.firestore();
    let collectionRef = collection(db, 'Dreams');
    let q = query(collectionRef, where('user.uid', '==', filter.uid));
    const querySnapshot = await getDocs(q);
    
    const dreams: Dream[] = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Dream));
    return dreams;
  }
}
