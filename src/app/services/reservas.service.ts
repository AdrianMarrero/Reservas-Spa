import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators';
import { ServicioModel } from '../models/servicio.model';


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
    return this.http.get(`api/disponibilidad`);
  }

  getAllServiciosOrderBy(filter) {    return this.http.get<ServicioModel[]>(this.urlServicios).pipe(
      map(messages => messages.sort((a1: ServicioModel, a2: ServicioModel) => a1.price - a2.price ))
    );
  }
}
