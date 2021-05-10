import { Component, OnInit } from '@angular/core';
import { UsuarioInterface } from '../../models/usuarioInterface';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { PaisService } from '../../services/pais/pais.service';
import { PaisInterface } from '../../models/paisInterface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private usuarioService:UsuarioService, private paisServices: PaisService) { }

  ngOnInit(): void {
    this.paisServices.getPais().subscribe((res: PaisInterface[])=>{
      this.Pais = res;
      console.log(this.Pais);
    });
  }

  Usuario:UsuarioInterface = {
    idUsuario : 0,
    Nombre: "",
    Apellido: "",
    Contrasena: "",
    Correo: "",
    Fecha_Nacimiento: new Date(),
    Credito: 10000,
    idPais: 0,
    Estado: "NOVERIFICADO"
  };

  Pais:PaisInterface[] = [];
  confirmPassword: string = "";
  Fecha_Nacimiento: string = "";

  postUsaurio(){
    if(this.Usuario.Contrasena!= '' && this.Usuario.Contrasena == this.confirmPassword){
      this.usuarioService.postUsuario(this.Usuario, this.Fecha_Nacimiento).subscribe((res: any)=>{
        console.log(res);
        this.usuarioService.postEmail(res, this.Usuario.Correo, "http://localhost:4200/confirmar/"+ res).subscribe(
          res=>{
            alert('CORREO ENVIADO');
          }
        )
      });
    }
  }
}
