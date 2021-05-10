import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })

  rep1(){
    const url = "http://07fcba2a17bd.ngrok.io/reporte/1";
    return this.http.get(url);
  }
  rep2(){
    const url = "http://07fcba2a17bd.ngrok.io/reporte/2";
    return this.http.get(url);
  }
  rep3(){
    const url = "http://07fcba2a17bd.ngrok.io/reporte/3";
    return this.http.get(url);
  }
  rep4(){
    const url = "http://07fcba2a17bd.ngrok.io/reporte/4";
    return this.http.get(url);
  }
}
