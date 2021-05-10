import { Component, OnInit } from '@angular/core';
import {Route, Router, ActivatedRoute} from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { ProductosService } from '../../services/productos/productos.service';
import { ProductoInterface } from '../../models/productoInterface';
import { CategoriaService } from '../../services/categoria/categoria.service';
import { CategoriaInterface } from '../../models/categoriaInterface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public productosService: ProductosService, private router: Router,
     private usuarioService: UsuarioService, private categoriaService:CategoriaService) { }


  ngOnInit(): void {
    this.productosService.getProductos().subscribe((res: ProductoInterface[])=>{
      this.Productos = res;
    });

    this.categoriaService.getCategoria().subscribe((res: CategoriaInterface[])=>{
      this.Categoria = res;
    });
  }
  Productos: ProductoInterface[] = [];
  Categoria: CategoriaInterface[] = [];

  palabra:string = "";
  idCategoria:number = 0;
  orden:string = "";


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

  getBusqueda(){
    console.log(this.palabra, this.idCategoria, this.orden);
    this.productosService.postBusqueda(this.palabra,this.idCategoria,this.orden).subscribe((res: ProductoInterface[])=>{
      this.Productos = res;
    })
  }

}
