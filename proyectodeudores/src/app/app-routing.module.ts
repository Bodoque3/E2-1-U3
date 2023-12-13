import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { EgresadoComponent } from '../app/componentes/egresado/egresado.component';
import { VerUsuariosComponent } from './componentes/ver-usuario/ver-usuario.component';
import { VerEgresoComponent } from './componentes/ver-egreso/ver-egreso.component';


const routes: Routes = [
  {
    path: 'Usuario',
    component: FormularioComponent
  },
  {
    path: 'Usuario/ver-usuario',
    component: VerUsuariosComponent

  },
  {
    path: 'Egreso',
    component: EgresadoComponent
  },
  {
    path: 'Egreso/ver-egreso',
    component: VerEgresoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
