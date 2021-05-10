import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component'
import { LoginComponent } from './components/login/login.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { NuevoPublicacionComponent } from './components/nuevo-publicacion/nuevo-publicacion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ContrasenaComponent } from './components/contrasena/contrasena.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { ReportesComponent } from './components/reportes/reportes.component';

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
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'carrito',
    component: CarritoComponent
  },
  {
    path: 'contrasena/:id',
    component: ContrasenaComponent
  },
  {
    path: 'confirmar/:id',
    component: ConfirmarComponent
  },
  {
    path: 'reportes',
    component: ReportesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
