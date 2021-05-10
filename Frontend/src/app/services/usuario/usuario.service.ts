import { Injectable } from '@angular/core';
import { UsuarioInterface } from '../../models/usuarioInterface';
import { map } from "rxjs/operators";
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
    const url = "http://07fcba2a17bd.ngrok.io/login/"+usuario+"/"+password;
    return this.http.get(url);
  }
  
  BuscarUsuario(id:string){
    const url = "http://07fcba2a17bd.ngrok.io/login/"+id;
    return this.http.get(url);
  }

  putUsuario(usuario: UsuarioInterface, fecha: string){
    const url = "http://07fcba2a17bd.ngrok.io/";
    return this.http.put(
      url,
      {
        "idUsuario": usuario.idUsuario,
        "Nombre": usuario.Nombre,
        "Apellido": usuario.Apellido,
        "Correo": usuario.Correo,
        "Contrasena": usuario.Contrasena,
        "Credito": usuario.Credito,
        "Estado": usuario.Estado,
        "idPais": usuario.idPais,
        "Fecha_Nacimiento": fecha
      }
      ,
      { headers: this.headers }
    ).pipe(map(data => data));
 
  }
  postUsuario(usuario: UsuarioInterface, fecha: string){
    const url = "http://07fcba2a17bd.ngrok.io/";
    return this.http.post(
      url,
      {
        "Nombre": usuario.Nombre,
        "Apellido": usuario.Apellido,
        "Correo": usuario.Correo,
        "Contrasena": usuario.Contrasena,
        "Credito": usuario.Credito,
        "Estado": usuario.Estado,
        "idPais": usuario.idPais,
        "Fecha_Nacimiento": fecha
      }
      ,
      { headers: this.headers }
    ).pipe(map(data => data));
 
  }

  Reestablecer_Correo(correo:String){
    const url = "http://07fcba2a17bd.ngrok.io/reestablecer/"+correo;
    return this.http.get(url);
  }
  Reestablecer_Contrasena(id:String, contrasena: String){
    const url = "http://07fcba2a17bd.ngrok.io/reestablecer/contrasena/"+id;
    return this.http.put(url,
      {
        Contrasena: contrasena
      }
      ,
      { headers: this.headers }
    ).pipe(map(data => data));
  }

  Confirmar_Usuario(id: String){
    const url = "http://07fcba2a17bd.ngrok.io/confirmar/"+id;
    return this.http.put(url,
      { }
      ,
      { headers: this.headers }
    ).pipe(map(data => data));
  }

  postEmail(id:Number, Correo:String, Texto: String){
    const url = "http://07fcba2a17bd.ngrok.io/send-mail";
    return this.http.post(url,
      {
        correo: Correo,
        asunto: "CONFIRMACION DE CORREO",
        texto: Texto
      }
      ,
      { headers: this.headers }
    ).pipe(map(data => data));
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
