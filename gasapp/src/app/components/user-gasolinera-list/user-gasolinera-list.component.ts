import { Component, OnInit } from '@angular/core';
import ListaFirebaseDto from 'src/app/models/interfaces/user.interface';
import { ListasFirebaseService } from 'src/app/service/ListasFirebaseService.service';
import { map } from 'rxjs/operators';
import { listaEESSPrecio } from 'src/app/models/interfaces/gasolinera.interface';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-user-gasolinera-list',
  templateUrl: './user-gasolinera-list.component.html',
  styleUrls: ['./user-gasolinera-list.component.css']
  
})
export class UserGasolineraListComponent implements OnInit {

  listasList!: ListaFirebaseDto[];

  constructor(private listasFirebaseService: ListasFirebaseService, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.getAllLists();
    console.log(this.listasList)
    let iduser= localStorage.getItem('uid')
    console.log(this.firestore.collection(`user/${iduser}/listas`).valueChanges());
     this.firestore.collection(`user/${iduser}/listas`).valueChanges()
    



    //<p *ngFor="let gasolinera of listasList">{{gasolinera.title}}</p>
  }

  getAllLists(): void {
    this.listasFirebaseService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
       this.listasList = data;
       console.log(this.listasList)
    });
   
  }

}
