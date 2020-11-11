import { Component, OnInit } from '@angular/core';
import {Route, Router, ActivatedRoute} from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { ProductosService } from '../../services/productos/productos.service';
import { ProductoInterface } from '../../models/productoInterface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public productosService: ProductosService, private router: Router, private usuarioService: UsuarioService) { }


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

  Imprimir(){
    let usuario = localStorage.getItem("Usuario");
    console.log(usuario);
  }

  verPagina(id:number){
    this.router.navigate(['/pagina',id]);
  }

  anadirCarrito(idProducto: number){
    this.productosService.añadirCarrito(this.usuarioService.getSesionId(), idProducto.toString()).subscribe(res=>{
      console.log(res);
    })
  }

}
