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

  getPublicaciones(id:string){
    const url = "http://localhost:3000/publicacion/"+id;
    return this.http.get(url);
  }


  getCarrito(id:string){
    const url = "http://localhost:3000/carrito/"+id;
    return this.http.get(url);
  }
  añadirCarrito(id:string,producto:string){
    const url = "http://localhost:3000/carrito";
    return this.http.post(
      url,
      {
        "idUsuario": id,
        "idProducto": producto,
      }
      ,
      { headers: this.headers }
    ).pipe(map(data => data));
  }


  deleteProducto(id:any){
    const url = "http://localhost:3000/producto/" + id;
    return this.http.delete(url).pipe(map(data => data));
  }

  postProducto(Nombre: String, Detalle_Producto: String , Precio: Number, idCategoria:Number, idUsuario:Number, Estado: String){
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
