import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaginaService {

  constructor(private http: HttpClient) {}
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })

  getPagina(id:string){
    const url = "http://07fcba2a17bd.ngrok.io/pagina/"+id;
    return this.http.get(url);
  }
}
