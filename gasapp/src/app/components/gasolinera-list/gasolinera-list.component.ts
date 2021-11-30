import { Component, OnInit } from '@angular/core';
import { DialogGasolineraDetailComponent } from 'src/app/dialogs/dialog-gasolinera-detail/dialog-gasolinera-detail.component';
import { GasolinerasListResponse, listaEESSPrecio, Provincias } from 'src/app/models/interfaces/gasolinera.interface';
import { GasolineraService } from 'src/app/service/gasolinera.service';


@Component({
  selector: 'app-gasolinera-list',
  templateUrl: './gasolinera-list.component.html',
  styleUrls: ['./gasolinera-list.component.css']
})
export class GasolineraListComponent implements OnInit {
  gasolineraList: listaEESSPrecio[] = [];
  
  todasgasolineras!: listaEESSPrecio[];
  provincias: Provincias[] = [];
  gasolineraListFiltrada!: listaEESSPrecio[];
  IDPovincia: String[]=[];
  precioMax=2;
  precioMin=0;
  
  slider1=0;

  constructor(private gasolineraService: GasolineraService) { }

  ngOnInit(): void {
    this.gasolineraService.getGasolineras().subscribe(resp => {
      console.log(resp);
      let jsonString = JSON.stringify(resp);
      let jsonStringReplaced = jsonString.replace(/Precio Gasoleo A/gi, 'precioGasoleoA');
      let jsonStringReplacedRotulo = jsonStringReplaced.replace(/Rótulo/gi, 'rotulo');
      let jsonStringReplaced2 = jsonStringReplacedRotulo.replace(/ListaEESSPrecio/gi, 'listaEESSPrecio');
      let jsonStringReplaced3 = jsonStringReplaced2.replace(/Municipio/gi, 'municipio');
      let jsonStringReplaced4 = jsonStringReplaced3.replace(/C\.P\./gi, 'cP');
      let jsonStringReplaced5 = jsonStringReplaced4.replace(/Dirección/gi, 'direccion');
      let jsonStringReplaced6 = jsonStringReplaced5.replace(/Horario/gi, 'horario');
      let jsonStringReplaced7 = jsonStringReplaced6.replace(/Precio Gasolina 95 E5/gi, 'precioGasolina95E5');
      let jsonStringReplaced8 = jsonStringReplaced7.replace(/Precio Gasolina 98 E5/gi, 'precioGasolina98E5');
      let jsonStringReplaced9 = jsonStringReplaced8.replace(/Provincia/gi, 'provincia');
      let jsonStringReplaced10 = jsonStringReplaced9.replace(/IDEESS/gi, 'ideess');
      let jsonStringReplaced11 = jsonStringReplaced10.replace(/IDMunicipio/gi, 'idMunicipio');
      let jsonStringReplaced12 = jsonStringReplaced11.replace(/IDProvincia/gi, 'idProvincia');
      let jsonStringReplaced13 = jsonStringReplaced12.replace(/IDCCAA/gi, 'idccaa');


      let jsonFinal: GasolinerasListResponse = JSON.parse(jsonStringReplaced13);
      this.gasolineraList =  jsonFinal.listaEESSPrecio;
      this.todasgasolineras = jsonFinal.listaEESSPrecio;
      this.gasolineraService.getProvincias().subscribe(m=>{
        this.provincias=m
      });
      console.log(this.gasolineraList);
    });
  }



  filterGasolinera(){
    console.log(this.IDPovincia);

    //Filtrado por pronvicia
    if(this.IDPovincia != []) {
      this.gasolineraListFiltrada = this.gasolineraList?.filter( g => this.IDPovincia.includes(g.idProvincia));
    }
    console.log(this.gasolineraListFiltrada);

    this.gasolineraListFiltrada = this.gasolineraListFiltrada?.filter( g => (Number.parseFloat(g.precioGasoleoA.replace(',', '.')) <= this.precioMax) && (Number.parseFloat(g.precioGasoleoA.replace(',', '.'))  >= this.precioMin));
    this.gasolineraListFiltrada = this.gasolineraListFiltrada?.filter( g => (Number.parseFloat(g.precioGasolina95E5.replace(',', '.')) <= this.precioMax) && (Number.parseFloat(g.precioGasolina95E5.replace(',', '.'))  >= this.precioMin));


    console.log(this.IDPovincia);
    console.log(this.precioMin);
    console.log(this.precioMax);
    console.log(this.gasolineraListFiltrada);
    this.gasolineraList=this.gasolineraListFiltrada;

  }

  quitarFiltro(){
    this.gasolineraList = this.todasgasolineras;
  }



  

}
