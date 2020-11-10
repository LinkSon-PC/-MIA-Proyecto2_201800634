import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component'
import { LoginComponent } from './components/login/login.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { NuevoPublicacionComponent } from './components/nuevo-publicacion/nuevo-publicacion.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'pagina/:id',
    component: PaginaComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'publicacion',
    component: PublicacionComponent
  },
  {
    path: 'nuevo_publicacion',
    component: NuevoPublicacionComponent
  },{
    path: 'registro',
    component: RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
