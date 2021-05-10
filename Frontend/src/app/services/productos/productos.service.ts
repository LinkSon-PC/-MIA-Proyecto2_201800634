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
    const url = "http://07fcba2a17bd.ngrok.io/producto";
    return this.http.get(url);
  }

  getPublicaciones(id:string){
    const url = "http://07fcba2a17bd.ngrok.io/publicacion/"+id;
    return this.http.get(url);
  }


  getCarrito(id:string){
    const url = "http://07fcba2a17bd.ngrok.io/carrito/"+id;
    return this.http.get(url);
  }
  añadirCarrito(id:string,producto:string){
    const url = "http://07fcba2a17bd.ngrok.io/carrito";
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
  deleteCarrito(id: string){
    const url = "http://07fcba2a17bd.ngrok.io/carrito/" + id;
    return this.http.delete(url).pipe(map(data => data));
  }
  getCabezera(id: string){
    const url = "http://07fcba2a17bd.ngrok.io/carrito/cabezera/" + id;
    return this.http.get(url);
  }

  Compra(id:Number, _total: Number){
    const url = "http://07fcba2a17bd.ngrok.io/compra/"+id;
    return this.http.put(
      url,
      {
        Credito: _total
      }
      ,
      { headers: this.headers }
    ).pipe(map(data => data));
  }
  Venta(id:Number, _total: Number){
    const url = "http://07fcba2a17bd.ngrok.io/venta/"+id;
    return this.http.put(
      url,
      {
        Credito: _total
      }
      ,
      { headers: this.headers }
    ).pipe(map(data => data));
  }


  deleteProducto(id:any){
    const url = "http://07fcba2a17bd.ngrok.io/producto/" + id;
    return this.http.delete(url).pipe(map(data => data));
  }

  postProducto(Nombre: String, Detalle_Producto: String , Precio: Number, idCategoria:Number, idUsuario:Number, Estado: String){
    const url = "http://07fcba2a17bd.ngrok.io/producto";
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


  postBusqueda(palabra: String, idCategoria: Number , orden: String){
    const url = "http://07fcba2a17bd.ngrok.io/buscar";
    return this.http.post(
      url,
      {
        "nombre": palabra,
        "idCategoria": idCategoria,
        "orden": orden
      },
      { headers: this.headers }
    ).pipe(map(data => data));
  }
}
