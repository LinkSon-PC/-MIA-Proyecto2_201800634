import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsuarioInterface } from '../../models/usuarioInterface';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { PaisService } from '../../services/pais/pais.service';
import { PaisInterface } from '../../models/paisInterface';
 
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private usuarioService:UsuarioService, private paisServices: PaisService) { }

  ngOnInit(): void {
    this.usuarioService.BuscarUsuario(this.usuarioService.getSesionId()).subscribe((res:UsuarioInterface)=>{
      this.Usuario = res;
      this.Fecha_Nacimiento = this.Usuario.Fecha_Nacimiento.toString().substring(0,10);
      console.log(this.Usuario.Fecha_Nacimiento.toString().substring(0,10));
      console.log(this.Fecha_Nacimiento);
    });
    
    this.paisServices.getPais().subscribe((res: PaisInterface[])=>{
      this.Pais = res;
      console.log(this.Pais);
    });
  }
  
  Pais:PaisInterface[] = [];
  Fecha_Nacimiento:string = "";
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

  putUsuario(){
    this.usuarioService.putUsuario(this.Usuario, this.Fecha_Nacimiento).subscribe(res=>{
      console.log(res);
    })
  }
  

}
