import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { UsuarioInterface } from '../../models/usuarioInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public usuarioService:UsuarioService, private router: Router) { }

  ngOnInit(): void {
    
  }

  user:string = "";
  pass:string = "";

  BuscarUsuario(){
    if(this.user!="" && this.pass!=""){
      console.log(this.user,this.pass);
      this.usuarioService.getUsuario(this.user,this.pass).subscribe((res:UsuarioInterface)=>{
        if(res != null){
          this.usuarioService.setSesion(res);
          this.router.navigate(['/inicio']);
        }
      })
    }
  }
}
