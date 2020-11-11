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

  constructor(private router: Router, private productoService: ProductosService, private usuarioService:UsuarioService) { }

  Publicaciones:CarritoInterface[] = [];

  ngOnInit(): void {
    this.productoService.getCarrito(this.usuarioService.getSesionId()).subscribe((res:CarritoInterface[])=>{
      this.Publicaciones = res;
      console.log(res);
    });
  }

}
