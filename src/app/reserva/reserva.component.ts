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
    for (var i = 0; i < disponibilidad.length; i++) {
      this.selectDate.push(disponibilidad[i].date);
      this.dict[disponibilidad[i].date] = [disponibilidad[i].range.start, disponibilidad[i].range.end];
      console.log(this.selectDate);
      console.log(this.dict);
    }
  }

  selectChangeHandler (event: any) {
    this.selectedDay = event.target.value;
    this.searchRangeHours(this.selectedDay);
  }

  searchRangeHours(selectDay){
    this.rangeHours = this.dict[selectDay];
    this.startRange = this.rangeHours[0];
    this.endRange = this.rangeHours[1];
    this.createWidgetHours();
  }


  createWidgetHours(){

    for (var i = 0; i < 24; i++) {
      this.hours.push([i + ':00']);
      

      if(new Date(2020,2,1,i,0,0) >= new Date(2020,2,1,11,0,0)  && new Date(2020,2,1,i,0,0) <= new Date(2020,2,1,17,0,0)){
        this.hours.push({'hora':i + ':00', 'libre': true});
        console.log(this.hours[i]);
      }else{
        this.hours.push({'hora':i + ':00', 'libre': false});
      }
    }
  }



}
