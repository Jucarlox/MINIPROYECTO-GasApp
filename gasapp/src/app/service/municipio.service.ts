import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Municipios } from '../models/interfaces/municipio.interface';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {
  constructor(private http: HttpClient) { }
  getMunicipiosFromProvincia(id: string[]): Observable<Municipios[]> {
    return this.http.get<Municipios[]>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/MunicipiosPorProvincia/${id}`);
  }
}