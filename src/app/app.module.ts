import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiciosSpaComponent } from './servicios-spa/servicios-spa.component';
import { ReservaComponent } from './reserva/reserva.component';

import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es';
import { FilterPipe } from './pipes/filter.pipe';
registerLocaleData(localeEsAr, 'es');

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServiciosSpaComponent,
    ReservaComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)

  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
