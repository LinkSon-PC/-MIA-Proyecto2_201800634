import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient){ }

  getPais(){
    const url = "http://07fcba2a17bd.ngrok.io/pais";
    return this.http.get(url);
  }
}
