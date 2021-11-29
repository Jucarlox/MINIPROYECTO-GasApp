import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GasolinerasListResponse } from '../models/interfaces/gasolinera.interface';


@Injectable({
  providedIn: 'root'
})
export class GasolineraService {

  constructor(private http: HttpClient) { }

  getGasolineras(): Observable<any> {
    return this.http.get<any>('../assets/response.json');
  }

  parseAnyToGasolineraListResponse(jsonString: string) {
    let jsonStringReplaced01 = jsonString.replace(/Precio Gasoleo A/gi, 'precioGasoleoA');
    let jsonStringReplaced = jsonString.replace(/Precio Gasoleo A/gi, 'precioGasoleoA');
    jsonStringReplaced = jsonStringReplaced.replace(/ListaEESSPrecio/gi, 'listaEESSPrecio');
    jsonStringReplaced = jsonStringReplaced01.replace(/ListaEESSPrecio/gi, 'listaEESSPrecio');
    let jsonFinal: GasolinerasListResponse = JSON.parse(jsonStringReplaced);
    return jsonFinal.listaEESSPrecio;
  }
}