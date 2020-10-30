import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsuarioInterface } from '../../models/usuarioInterface';
import { UsuarioService } from '../../services/usuario/usuario.service';
 
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private usuarioService:UsuarioService) { }

  fecha:number = 0;

  ngOnInit(): void {
    this.usuarioService.BuscarUsuario(this.usuarioService.getSesionId()).subscribe((res:UsuarioInterface)=>{
      this.Usuario = res;
      console.log(this.Usuario.Fecha_Nacimiento);
      console.log(res.Fecha_Nacimiento);
    });
  }

  tipo:string = "short"
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
