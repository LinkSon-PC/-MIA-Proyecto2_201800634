import { Component, OnInit } from '@angular/core';
import { UsuarioInterface } from '../../models/usuarioInterface';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
  }

  Usuario:UsuarioInterface = {
    idUsuario : 0,
    Nombre: "",
    Apellido: "",
    Contrasena: "",
    Correo: "",
    Fecha_Nacimiento: new Date(),
    Credito: 0,
    idPais: 0,
    Estado: ""
  };
}
