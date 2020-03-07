import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const servicios = [
      {
        id : 1,
        name : 'Masaje a 4 manos 60\'',
        // tslint:disable-next-line: max-line-length
        description : 'Este tratamiento consta de varias etapas que buscan estimular el cuerpo para la mejor recepción de las propiedades medicinales de los productos orgánicos utilizados, entre los que se destacan el fango, arcillas, algas o chocolate.',
        price : 20.50
      },
      {
        id : 2,
        name : 'Masaje Facial Relajante 45\'',
        description : 'Masaje facial indicado para reducir tensiones del rostro.',
        price : 10.33
      }
    ];
    const disponibilidad = [
      {
        date: '2020-02-01',
        range:
        {
          start: '10:00',
          end: '16:00'
        },
      },
      {
        date: '2020-02-02',
        range:
        {
          start: '11:00',
          end: '17:00'
        },
      },
    ];



    return { servicios, disponibilidad };
  }
}
