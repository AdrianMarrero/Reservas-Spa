import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  urlServicios = 'api/servicios/';

  constructor(private http: HttpClient) { }

  getAllServicios(){
    return this.http.get(this.urlServicios);
  }

  getServicioSeleccionado(id: number){
    return this.http.get(this.urlServicios + id);
  }

  getDisponibilidad(){
    return this.http.get(`api/disponibilidad`)
  }

}
