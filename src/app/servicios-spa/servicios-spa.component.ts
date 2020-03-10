import { ReservasService } from './../services/reservas.service';
import { Component, OnInit } from '@angular/core';

import { ServicioModel } from '../models/servicio.model';

@Component({
  selector: 'app-servicios-spa',
  templateUrl: './servicios-spa.component.html',
  styleUrls: ['./servicios-spa.component.sass']
})
export class ServiciosSpaComponent implements OnInit {

  serviciosList: object;
  filterServicio = '';
  filter = false;
  imgUrl = 'assets/img/';
  loading = true;

  constructor(private servicios: ReservasService) { }


  ngOnInit() {
    this.listAll();
  }

  listAll() {
    this.loading = true;
    this.servicios.getAllServicios()
      .subscribe( resp => {
        this.serviciosList = resp;
        this.loading = false;
      });
  }



  onFilterChange(eve: any) {
    this.filter = !this.filter;
    this.serviciosList = [];

    if (this.filter) {
      this.loading = true;
      this.servicios.getAllServiciosOrderBy(this.filter)
      .subscribe( resp => {
        console.log(resp);
        this.serviciosList = resp;
        this.loading = false;
      });
    } else {
      this.listAll();
    }
  }

}
