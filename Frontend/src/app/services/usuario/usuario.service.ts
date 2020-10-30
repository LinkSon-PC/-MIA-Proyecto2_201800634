import { Injectable } from '@angular/core';
import { UsuarioInterface } from '../../models/usuarioInterface';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private router:Router) {}
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })

  log = false;
  UsuarioLog:UsuarioInterface = {
    idUsuario:0,
    Nombre:"",
    Apellido:"",
    Correo:"",
    Contrasena:"",
    Credito:0,
    Estado:"",
    idPais:0
  }

  getUsuario(usuario:string, password:string){
    const url = "http://localhost:3000/login/"+usuario+"/"+password;
    return this.http.get(url);
  }
  
  BuscarUsuario(id:string){
    const url = "http://localhost:3000/login/"+id;
    return this.http.get(url);
  }
  
  setSesion(user:UsuarioInterface){
    this.UsuarioLog=user; /// lleno mi variable tipo Usuario con los datos obtenidos
    localStorage.setItem("idUsuario", user.idUsuario.toString());
    localStorage.setItem("Correo", user.Correo.toString());
    localStorage.setItem("Contrasena", user.Contrasena.toString());
    localStorage.setItem("Usuario", JSON.stringify(this.UsuarioLog)); /// guardo en el localhost mi variable usuario de tipo Usuario
   
  }
  OutSesion(){ 
    localStorage.setItem("idUsuario", null);
    localStorage.setItem("Correo", null);
    localStorage.setItem("Contrasena", null);
    localStorage.setItem("Usuario", null);
    this.log=false;
  
      this.router.navigate(['/login']);
  }
  
  getSesionUsuario(){
  let nombre= localStorage.getItem("Correo");
  return nombre;
  }
  
  getSesionId(){
  let idUsuario= localStorage.getItem("idUsuario");
  return idUsuario;
  }
  //convierte el String a Objeto y lo devuelve
  getSesionObjeto(){
  let devolver_usuario= JSON.parse(localStorage.getItem("Usuario"));
  return devolver_usuario;
  }
  //Obtengo el codigo del tipo de usuario y lo devuelvo
  getSesionContrasena(){
    let cod_tipo_fk= localStorage.getItem("Contrasena");
    return cod_tipo_fk;
    }
}
