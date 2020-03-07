import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../services/reservas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.sass']
})
export class ReservaComponent implements OnInit {

  servicioSeleccionado = [];
  disponibilidadObj: Object;

  constructor(private service: ReservasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getService(id);
    this.disponibilidad();
  }

  getService(id){
    this.service.getServicioSeleccionado(id)
    .subscribe( resp => {
      console.log(resp);
      this.servicioSeleccionado.push(resp);
    });
  }

  disponibilidad(){
    this.service.getDisponibilidad()
    .subscribe( resp => {
      console.log(resp);
      this.disponibilidadObj = resp;
    });
  }

}
