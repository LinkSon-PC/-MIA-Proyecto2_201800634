import { Component, OnInit } from '@angular/core';
import { PaginaService } from '../../services/pagina/pagina.service';
import {Route, Router, ActivatedRoute} from '@angular/router';
import { ProductoInterface } from '../../models/productoInterface'

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  constructor(public paginaService: PaginaService, private router: Router, private activatedRoute:ActivatedRoute) {}


  Producto:ProductoInterface[] = [];
  ngOnInit(): void {
    const params =this.activatedRoute.snapshot.params;
    console.log(params.id);


    this.paginaService.getPagina(params.id).subscribe((res: ProductoInterface[])=>{
      this.Producto = res;
    console.log(this.Producto);
    });
  }

}
