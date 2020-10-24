import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos/productos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public productosService:ProductosService) { }

  ngOnInit(): void {
    console.log('correcto'); 
    this.productosService.getProductos().subscribe((res)=>{
      console.log(res);
    })
  }

}
