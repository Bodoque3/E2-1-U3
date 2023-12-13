import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from '@angular/common/http';
import { EgresadoComponent } from './componentes/egresado/egresado.component';
import { VerUsuarioComponent } from './componentes/ver-usuario/ver-usuario.component';
import { VerEgresoComponent } from './componentes/ver-egreso/ver-egreso.component'

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    EgresadoComponent,
    VerUsuarioComponent,
    VerEgresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
