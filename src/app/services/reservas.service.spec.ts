
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from '../app-routing.module';
import { InMemoryDataService } from '../in-memory-data.service';
import { FilterPipe } from '../pipes/filter.pipe';
import { ReservaComponent } from '../reserva/reserva.component';
import { ReservasService } from '../services/reservas.service';
import { ServiciosSpaComponent } from '../servicios-spa/servicios-spa.component';

describe('ReservasService', () => {
  //let service: ReservasService;
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [FilterPipe, ReservaComponent, ServiciosSpaComponent  ],
    imports: [
      FormsModule,
      AppRoutingModule,
      HttpClientModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    providers: [ReservasService]

  }));

  it('El servicio se crea', () => {
    const service: ReservasService = TestBed.get(ReservasService);
    expect(service).toBeTruthy();
  });

  it('getAllServicios retorna valores', () => {
    const service: ReservasService = TestBed.get(ReservasService);
    expect(service.getAllServicios()).toBeTruthy();
  });

  it('getServicioSeleccionado retorna valores', () => {
    const service: ReservasService = TestBed.get(ReservasService);
    expect(service.getServicioSeleccionado(1)).toBeTruthy();
  });

});
