
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservaComponent } from './reserva/reserva.component';
import { ServiciosSpaComponent } from './servicios-spa/servicios-spa.component';


const routes: Routes = [
  { path: 'servicios', component: ServiciosSpaComponent},
  { path: 'reserva/:id', component: ReservaComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'servicios'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
