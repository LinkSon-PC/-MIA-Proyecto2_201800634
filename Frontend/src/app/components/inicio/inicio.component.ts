import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../../services/productos/productos.service';
import { ProductoInterface } from '../../models/productoInterface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public productosService: ProductosService) { }


  ngOnInit(): void {
    this.productosService.getProductos().subscribe((res: ProductoInterface[])=>{
      this.Productos = res;
    });
  }
  Productos: ProductoInterface[]=[];

  Nombre:string = "";
  Detalle_Producto:string = "";
  Precio:number = 0;
  idCategoria:number = 0;
  idUsuario:number = 0;
  Estado:string = "VISIBLE";

  addProducto(){ 
    this.productosService.postProducto(this.Nombre,this.Detalle_Producto,this.Precio,this.idCategoria,this.idUsuario,this.Estado).subscribe((res: ProductoInterface[])=>{
      this.Productos = res;
    })
  }

}