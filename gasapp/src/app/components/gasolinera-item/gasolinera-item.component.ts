import { Component, Input, OnInit, Output } from '@angular/core';
import { listaEESSPrecio } from 'src/app/models/interfaces/gasolinera.interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogGasolineraDetailComponent } from 'src/app/dialogs/dialog-gasolinera-detail/dialog-gasolinera-detail.component';
import { GasolineraService } from 'src/app/service/gasolinera.service';
import firebaseConfig from 'firebase/compat/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { generateKeyPair } from 'crypto';
const COLLECTION_GASOLINERA_LIKE = 'gasolineraLike'; 

@Component({
  selector: 'app-gasolinera-item',
  templateUrl: './gasolinera-item.component.html',
  styleUrls: ['./gasolinera-item.component.css']
})
export class GasolineraItemComponent implements OnInit {

  @Input() gasolineraInput!: listaEESSPrecio; 
  gasolineraList!: Observable<listaEESSPrecio[]>;
  constructor(private dialog: MatDialog, private gasolineraService: GasolineraService, private firestore: AngularFirestore,private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  openDialogDetails() {
    this.dialog.open(DialogGasolineraDetailComponent, {
      height:'400px',
      width:'300px',
      data: {gasolineraInput: this.gasolineraInput}
    })
  }

  getGoogleMaps(direccion:String){
    this.gasolineraService.getGoogleMaps(direccion.replace(' ', '+'));
  }

  likeGasolinera(gasolinera: listaEESSPrecio) {
    if(localStorage.getItem('name')!=null) {
    this.firestore.collection(COLLECTION_GASOLINERA_LIKE)
      .add({ 
        provincia: gasolinera.provincia, 
        direccion: gasolinera.direccion, 
        horario: gasolinera.horario,
        cP: gasolinera.cP,
        municipio: gasolinera.municipio,
        precioGasoleoA: gasolinera.precioGasoleoA,
        precioGasolina95E5: gasolinera.precioGasolina95E5,
        precioGasolina98E5: gasolinera.precioGasolina98E5,
        rotulo: gasolinera.rotulo,
        ideess: gasolinera.ideess,
        idMunicipio: gasolinera.idMunicipio,
        idProvincia: gasolinera.idProvincia,
        idccaa: gasolinera.idccaa,
        userName: localStorage.getItem('name'),
        
      });
    } else {
      window.location.replace("http://localhost:4200/login")
    }
    this.gasolineraList = this.firestore.collection<listaEESSPrecio>(COLLECTION_GASOLINERA_LIKE).valueChanges();
    
    
    
  }

  
  
  

}
