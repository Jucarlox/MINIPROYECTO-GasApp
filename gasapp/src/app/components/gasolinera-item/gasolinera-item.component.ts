import { Component, Input, OnInit } from '@angular/core';
import { listaEESSPrecio } from 'src/app/models/interfaces/gasolinera.interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogGasolineraDetailComponent } from 'src/app/dialogs/dialog-gasolinera-detail/dialog-gasolinera-detail.component';
import { GasolineraService } from 'src/app/service/gasolinera.service';

@Component({
  selector: 'app-gasolinera-item',
  templateUrl: './gasolinera-item.component.html',
  styleUrls: ['./gasolinera-item.component.css']
})
export class GasolineraItemComponent implements OnInit {

  @Input() gasolineraInput!: listaEESSPrecio;
  constructor(private dialog: MatDialog, private gasolineraService: GasolineraService) { }

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

}
