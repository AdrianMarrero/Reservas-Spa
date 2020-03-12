import { ReservasService } from './../services/reservas.service';
import { ServiciosSpaComponent } from './servicios-spa.component';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';
import { FilterPipe } from '../pipes/filter.pipe';
import { ReservaComponent } from '../reserva/reserva.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('ServiciosSpaComponent', () => {
  let component: ServiciosSpaComponent;
  let fixture: ComponentFixture<ServiciosSpaComponent>;
  const service = new ReservasService(null);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosSpaComponent, ReservaComponent , FilterPipe ],
    imports: [
      AppRoutingModule,
      FormsModule,
      HttpClientTestingModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    providers: [ReservasService]
  })
  .compileComponents();
  });

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ServiciosSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('El componente se crea correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('El input para buscar existe', async(() => {
    fixture.detectChanges();
    const compile = fixture.debugElement.nativeElement;
    const inputSearch = compile.querySelector('input[name="filterServicio"]');
    expect(inputSearch).toBeTruthy();
  }));

  it('El checkbox para ordenar por precio existe', async(() => {
    fixture.detectChanges();
    const compile = fixture.debugElement.nativeElement;
    const checkbox = compile.querySelector('input[id="customControlInline"]');
    expect(checkbox).toBeTruthy();
  }));

  it('Existe al menos una card con un servicio', async(() => {
    fixture.detectChanges();
    const compile = fixture.debugElement.nativeElement;
    const inputSearch = compile.querySelectorAll('.card');
    expect(inputSearch).toBeTruthy();
  }));


  it('El path para la image es correcto', async(() => {
    fixture.detectChanges();
    const imgUrl = component.imgUrl;
    expect(imgUrl).toMatch('assets/img/');
  }));

  it('En ngOnInit se llama a listAll', fakeAsync (() => {
    spyOn(component, 'listAll');
    component.ngOnInit();
    expect(component.listAll).toHaveBeenCalled();
  }));

  it('onFilterChange activado checkbox', async (() => {
    const spyonFunction = spyOn(service, 'getAllServiciosOrderBy');
    component.onFilterChange(true);
    expect(component.filter).toBeTruthy();
  }));



  it('onFilterChange desactivado checkbox', fakeAsync (() => {
    const spy = spyOn(component, 'listAll');
    component.filter = true;
    fixture.detectChanges();
    component.onFilterChange(true);
    expect(spy).toHaveBeenCalled();
  }));


});

