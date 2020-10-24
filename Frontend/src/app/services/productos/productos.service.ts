import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })

  getProductos(){
    const url = "http://localhost:3000/producto";
    return this.http.get(url);
  }

  deleteProducto(id:any){
    const url = "http://localhost:3000/producto/" + id;
    return this.http.delete(url).pipe(map(data => data));
  }

  postProducto(Nombre: string, Detalle_Producto: string , Precio: number, idCategoria:number, idUsuario:number, Estado: string){
    const url = "http://localhost:3000/producto"
    return this.http.post(
      url,
      {
        "Nombre": Nombre,
        "Detalle_Producto": Detalle_Producto,
        "Precio": Precio,
        "idCategoria": idCategoria,
        "idUsuario": idUsuario,
        "Estado": Estado
      },
      { headers: this.headers }
    ).pipe(map(data => data));

  }
}
