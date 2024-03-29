import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaginaComponent } from './components/pagina/pagina.component';
import { NavComponent } from './components/nav/nav.component';

import { ProductosService } from './services/productos/productos.service';
import { PaginaService } from './services/pagina/pagina.service';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { NuevoPublicacionComponent } from './components/nuevo-publicacion/nuevo-publicacion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ContrasenaComponent } from './components/contrasena/contrasena.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { ReportesComponent } from './components/reportes/reportes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    PaginaComponent,
    NavComponent,
    PerfilComponent,
    PublicacionComponent,
    NuevoPublicacionComponent,
    RegistroComponent,
    CarritoComponent,
    ContrasenaComponent,
    ConfirmarComponent,
    ReportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductosService,
    PaginaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
