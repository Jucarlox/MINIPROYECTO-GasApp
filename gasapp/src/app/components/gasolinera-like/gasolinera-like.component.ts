import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { setUserId } from 'firebase/analytics';
import { get } from 'firebase/database';
import { list } from 'rxfire/database';
import { listaEESSPrecio } from 'src/app/models/interfaces/gasolinera.interface';
const COLLECTION_GASOLINERA_LIKE = 'gasolineraLike';
@Component({
  selector: 'app-gasolinera-like',
  templateUrl: './gasolinera-like.component.html',
  styleUrls: ['./gasolinera-like.component.css']
})
export class GasolineraLikeComponent implements OnInit {

  @Input() gasolineraLikeInput!: listaEESSPrecio;
  constructor(private firestore: AngularFirestore) {};

  
  ngOnInit(): void {
    
  }

  dislike(gasolinera: listaEESSPrecio){
    
    this.firestore.collection(COLLECTION_GASOLINERA_LIKE, ref=>ref.where('userName','==',localStorage.getItem('name')).where('ideess','==',gasolinera.ideess)).doc().delete();
    
    
  }
 

}




