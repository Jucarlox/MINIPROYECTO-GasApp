import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import ListaFirebaseDto from '../models/interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class ListasFirebaseService {

  listasRef!: AngularFirestoreCollection<ListaFirebaseDto>;

  constructor(private firestore: AngularFirestore) {
    
  }

  getAll(): AngularFirestoreCollection<ListaFirebaseDto> {
    let userId = localStorage.getItem('uid');
    this.listasRef = this.firestore.collection(`user/${userId}/listas`);
    return this.listasRef;
  }
}