import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient){ }

  getPais(){
    const url = "http://localhost:3000/pais";
    return this.http.get(url);
  }
}
