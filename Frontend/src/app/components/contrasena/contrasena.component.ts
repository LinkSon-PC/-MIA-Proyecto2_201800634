import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-contrasena',
  templateUrl: './contrasena.component.html',
  styleUrls: ['./contrasena.component.css']
})
export class ContrasenaComponent implements OnInit {

  constructor(private usuarioService:UsuarioService, private rutaActiva: ActivatedRoute,
    private router:Router) { }

  pass:String = "";
  confirm:String = "";

  ngOnInit(): void {
    console.log(this.rutaActiva.snapshot.params.id);
  }

  CambiarContrasena(){
    if(this.pass!="" && this.confirm!=""){
      if(this.pass == this.confirm){
        this.usuarioService.Reestablecer_Contrasena(this.rutaActiva.snapshot.params.id, this.pass).subscribe(
          res=>{
            console.log(res);
          }
        )
        alert("CAMBIO DE CONTRASEÑA EXITOSO");
        this.router.navigate(['/']);
      }else{
        alert("CONTRASEÑAS NO IGUALES");
      }
    }else{
      alert("NO DEJAR CAMPOS VACIÓS");
    }
  }
}
