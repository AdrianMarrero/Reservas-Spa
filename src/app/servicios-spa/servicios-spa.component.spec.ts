import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosSpaComponent } from './servicios-spa.component';

describe('ServiciosSpaComponent', () => {
  let component: ServiciosSpaComponent;
  let fixture: ComponentFixture<ServiciosSpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosSpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
