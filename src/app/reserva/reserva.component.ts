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
  disponibilidadArr: any;
  dict = new Object();
  selectDate: any[] = [];
  selectedDay: string;
  rangeHours: string[] = [];
  startRange: string;
  endRange: string;
  hours: any[] = [];

  constructor(private service: ReservasService,
              private route: ActivatedRoute) {
              }

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
      this.disponibilidadArr = resp;
      this.createObjHours(this.disponibilidadArr);
    });
  }

  createObjHours(disponibilidad){
    for (let i = 0; i < disponibilidad.length; i++) {
      this.selectDate.push(disponibilidad[i].date);
      this.dict[disponibilidad[i].date] = [disponibilidad[i].range.start, disponibilidad[i].range.end];
    }
    this.searchRangeHours(this.selectDate[0]);
  }

  selectChangeHandler (event: any) {
    this.selectedDay = event.target.value;
    this.searchRangeHours(this.selectedDay);
  }

  searchRangeHours(selectDay){
    this.rangeHours = this.dict[selectDay];
    this.startRange = this.rangeHours[0];
    this.endRange = this.rangeHours[1];
    this.createWidgetHours(selectDay, this.startRange, this.endRange);
  }


  createWidgetHours(date, start, end) {
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);
    const startSbstr = start.substring(0, 2);
    const endSbstr = end.substring(0, 2);

    this.hours = [];
    for (let i = 0; i < 24; i++) {
      this.hours.push([i + ':00']);
      if (new Date(year, month, day, i, 0, 0) >= new Date(year, month, day, startSbstr, 0, 0)  &&
          new Date(year, month, day, i, 0, 0) <= new Date(year, month, day, endSbstr, 0, 0)) {

          this.hours.push({hora: i + ':00', libre: true});

      } else {

          this.hours.push({hora: i + ':00', libre: false});
      }
    }
  }



}
