import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { CategoriaService } from '../../services/categoria/categoria.service';
import { CategoriaInterface } from '../../models/categoriaInterface';
import { ProductoInterface } from '../../models/productoInterface';
import { ProductosService } from '../../services/productos/productos.service'
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-nuevo-publicacion',
  templateUrl: './nuevo-publicacion.component.html',
  styleUrls: ['./nuevo-publicacion.component.css']
})
export class NuevoPublicacionComponent implements OnInit {

  constructor(private categoriaService:CategoriaService, private usuarioService:UsuarioService,
    private productoService:ProductosService) { }

  ngOnInit(): void {
    this.categoriaService.getCategoria().subscribe( (res: CategoriaInterface[]) =>{
      this.Categoria = res;
      console.log(this.Categoria);

      this.publicacion.idUsuario = Number.parseInt( this.usuarioService.getSesionId());  
    });
  }
  public Categoria: CategoriaInterface[] = [];

  publicacion:ProductoInterface = {
    Nombre:"",
    Detalle_Producto:"",
    Estado:"VISIBLE",
    Precio: 0,
    idCategoria: 0,
    idUsuario: 0
  }

  imprmir(){
    console.log(this.publicacion);
  }

  PostPublicacion(){
    this.productoService.postProducto(this.publicacion.Nombre, this.publicacion.Detalle_Producto,
       this.publicacion.Precio, this.publicacion.idCategoria, this.publicacion.idUsuario, this.publicacion.Estado).subscribe(res =>{
         console.log(res);
       });
  }

}
