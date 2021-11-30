import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { listaEESSPrecio } from 'src/app/models/interfaces/gasolinera.interface';

@Component({
  selector: 'app-dialog-gasolinera-detail',
  templateUrl: './dialog-gasolinera-detail.component.html',
  styleUrls: ['./dialog-gasolinera-detail.component.css']
})
export class DialogGasolineraDetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: DialogGasolineraDetailComponent) { }

  gasolineraInput: listaEESSPrecio= this.data.gasolineraInput;

  ngOnInit(): void {

  }

}
