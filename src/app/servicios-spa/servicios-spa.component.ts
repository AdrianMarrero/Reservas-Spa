import { ReservasService } from './../services/reservas.service';
import { Component, OnInit } from '@angular/core';
import { ServicioModel } from '../models/servicio.model';

@Component({
  selector: 'app-servicios-spa',
  templateUrl: './servicios-spa.component.html',
  styleUrls: ['./servicios-spa.component.sass']
})
export class ServiciosSpaComponent implements OnInit {

  serviciosList: any;

  constructor(private servicios: ReservasService) { }

  ngOnInit() {
    this.listAll();
  }

  listAll(){
    this.servicios.getAllServicios()
    .subscribe( resp => {
      console.log(resp);
      this.serviciosList = resp;
    });
  }
}
