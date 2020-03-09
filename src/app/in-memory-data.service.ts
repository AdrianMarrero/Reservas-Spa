import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const servicios = [
      {
        id : 1,
        name : 'Masaje a 4 manos 60\'',
        // tslint:disable-next-line: max-line-length
        description : 'Este tratamiento consta de varias etapas que buscan estimular el cuerpo para la mejor recepción de las propiedades medicinales de los productos orgánicos utilizados, entre los que se destacan el fango, arcillas, algas o chocolate.',
        img : 'masaje-BIO-spa-Isabel-500x300.jpg',
        price : 20.50
      },
      {
        id : 2,
        name : 'Masaje Facial Relajante 45\'',
        description : 'Masaje facial indicado para reducir tensiones del rostro.',
        img : 'Spa-Kinesia-San-Agustín-cubo-de-agua-500x300.jpg',
        price : 10.33
      },
      {
        id : 3,
        name : 'Spa JC1 Sercotel Murcia',
        description : '50 minutos en zona Spa: piscina temática, dos camas de relajación, una cascada, un cuello de cisne y diferentes jet para trabajar zona podal, piernas, lumbar y cervical',
        img : 'masaje-vichy-Spa-JC1-Sercotel-Murcia-500x300.jpg',
        price : 23.00
      },
      {
        id : 4,
        name : 'Spa By Alina Vriel',
        description : 'En el Spa Kinesia San Agustín encontrarás el bienestar, tranquilidad y armonía que necesitas en su completo circuito spa acompañado de un masaje relajante o tratamiento personalizado.',
        img : 'circuito-termal-Spa-Kinesia-San-Agustín-500x300.jpg',
        price : 29.00
      },
      {
        id : 5,
        name : 'Spa Kumaras',
        description : 'Masaje facial indicado para reducir tensiones del rostro.',
        img : 'circuito-hidrotermal-Spa-Kumaras-500x300.jpg',
        price : 30.00
      },
      {
        id : 6,
        name : 'Al-Haram Granada Baños de Santa Paula',
        description : 'En los Baños de Santa Paula podrás disfrutar de un auténtico Hammam. Las cálidas piscinas y los suaves perfumes del hamman te trasladarán a un mundo único.',
        img : 'Baños-de-Santa-Paula-Granada-500x300.jpg',
        price : 32.00
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
      {
        date: '2020-02-03',
        range:
        {
          start: '10:00',
          end: '11:00'
        },
      },
      {
        date: '2020-02-04',
        range:
        {
          start: '15:00',
          end: '20:00'
        },
      },
    ];



    return { servicios, disponibilidad };
  }
}
