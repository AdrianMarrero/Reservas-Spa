import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from '../app-routing.module';
import { InMemoryDataService } from '../in-memory-data.service';
import { FilterPipe } from '../pipes/filter.pipe';
import { ReservaComponent } from '../reserva/reserva.component';
import { ReservasService } from '../services/reservas.service';
import { ServiciosSpaComponent } from './servicios-spa.component';
import { Observable, observable } from 'rxjs';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';



describe('ServiciosSpaComponent', () => {
  let component: ServiciosSpaComponent;
  let fixture: ComponentFixture<ServiciosSpaComponent>;


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


  it('El Componente de crea correctamente', () => {
    expect(component).toBeTruthy();
  });

});
