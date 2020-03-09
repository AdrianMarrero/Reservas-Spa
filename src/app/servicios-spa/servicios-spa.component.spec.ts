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


describe('ServiciosSpaComponent', () => {
  let component: ServiciosSpaComponent;
  let fixture: ComponentFixture<ServiciosSpaComponent>;
  let service: ReservasService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ ServiciosSpaComponent, FilterPipe, ReservaComponent ],
      imports: [
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
      ],
      providers: [ReservasService]
    });

    fixture = TestBed.createComponent(ServiciosSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
