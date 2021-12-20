import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ref } from 'firebase/database';
import { Observable } from 'rxjs';
import { listaEESSPrecio } from 'src/app/models/interfaces/gasolinera.interface';

const COLLECTION_GASOLINERA_LIKE = 'gasolineraLike'; 
@Component({
  selector: 'app-gasolinera-like-list',
  templateUrl: './gasolinera-like-list.component.html',
  styleUrls: ['./gasolinera-like-list.component.css']
})
export class GasolineraLikeListComponent implements OnInit {

  
  
  constructor(private firestore: AngularFirestore) { }
  gasolinerasLikeList!: Observable<listaEESSPrecio[]>;
  
  ngOnInit(): void {
    let id= localStorage.getItem('uid');
    this.gasolinerasLikeList= this.firestore.collection<listaEESSPrecio>(`user/${id}/listas/OHXWN59DPfvd1W9GaEHh/gasolinerasFavorite`).valueChanges();
    
  }
  likeReload(){
    window.location.replace("http://localhost:4200/gasolineras");
  }

}


