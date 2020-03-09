import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  noResults: boolean = true;

  transform(value: any, arg: any): any {
    let resultServicios = [];
    if (value) {
      for (const servicio of value) {
        if (servicio.name.toLowerCase().includes(arg.toLowerCase())) {
          resultServicios.push(servicio);
        }
      }
      if (resultServicios.length === 0) {
        return resultServicios = [{nodata: true}];
      } else {
        return resultServicios;
      }
    } else {
      return resultServicios;
    }


  }

}
