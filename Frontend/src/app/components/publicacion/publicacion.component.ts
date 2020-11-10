import { Component, OnInit } from '@angular/core';
import {Route, Router, ActivatedRoute} from '@angular/router';
import { ProductoInterface } from '../../models/productoInterface';
import { ProductosService } from '../../services/productos/productos.service';
import { UsuarioService } from '../../services/usuario/usuario.service';


@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  constructor(private router: Router, private productoService: ProductosService, private usuarioService:UsuarioService) { }

  Publicaciones:ProductoInterface[] = [];

  ngOnInit(): void {
    this.productoService.getPublicaciones(this.usuarioService.getSesionId()).subscribe((res:ProductoInterface[])=>{
      this.Publicaciones = res;
      console.log(res);
    });
  }

}
