import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { UsuarioInterface } from '../../models/usuarioInterface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent implements OnInit {

  constructor(public usuarioService:UsuarioService, private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.usuarioService.BuscarUsuario(this.rutaActiva.snapshot.params.id).subscribe((res:UsuarioInterface)=>{
      this.Usuario = res;
    });
  }

  Usuario: UsuarioInterface = {
    idUsuario:0,
    Nombre: "",
    Apellido: "",
    Contrasena: "",
    Correo: "",
    Credito: 10000
  };

  Confirmar_Usuario(){
    this.usuarioService.Confirmar_Usuario(this.rutaActiva.snapshot.params.id).subscribe(
      res=>{
        console.log(res);
        alert('USUARIO CONFIRMADO');
        this.router.navigate(['/']);
      })
  }

}
