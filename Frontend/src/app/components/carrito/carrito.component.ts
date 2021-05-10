import { Component, OnInit } from '@angular/core';
import {Route, Router, ActivatedRoute} from '@angular/router';
import { CarritoInterface } from '../../models/carritoInterface';
import { ProductosService } from '../../services/productos/productos.service';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private router: Router, private productoService: ProductosService,
     private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.productoService.getCarrito(this.usuarioService.getSesionId()).subscribe((res:CarritoInterface[])=>{
      this.Publicaciones = res;
      console.log(res);
    });

    this.productoService.getCabezera(this.usuarioService.getSesionId()).subscribe(
      (res:any)=>{
        if(res!=null){
          this.Carrito = res;
         console.log(this.Carrito);
        }
      }
    )
  }
  Publicaciones:CarritoInterface[] = [];
  Carrito: any ={
    Total: 0,
    Credito: 0,
    idCarrito: 0
  }

  deleteCarrito(id: Number){
    this.productoService.deleteCarrito(id.toString()).subscribe(res=>{
      console.log(res);
      this.ngOnInit();
    })
  }

  Comprar(){
    if(this.Carrito.Credito >= this.Carrito.Total){
      this.productoService.Compra(Number.parseInt(this.usuarioService.getSesionId()), this.Carrito.Credito- this.Carrito.Total).subscribe(
        res=>{
          alert('COMPRA REALIZADA');  
        }
      );

      for (const publicacion of this.Publicaciones) {
          this.productoService.Venta(publicacion.idProducto,publicacion.Precio).subscribe(
            res =>{
              console.log(publicacion.idProducto,publicacion.Precio);
            }
          )
      }
    }else{
      alert('CREDITOS INSUFICIENTES');
    }
  }
}
