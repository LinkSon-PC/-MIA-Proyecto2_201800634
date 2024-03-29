import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getCategoria(){
    const url = "http://07fcba2a17bd.ngrok.io/categoria";
    return this.http.get(url);
  }
  
}
