import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { ReportesService } from '../../services/reportes/reportes.service';
import { Reporte1 } from '../../models/reporte1';
import { UsuarioInterface } from '../../models/usuarioInterface';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  constructor(private usuarioService:UsuarioService, private reporteService:ReportesService) { }

  ngOnInit(): void {
    this.reporteService.rep1().subscribe((res: Reporte1[])=>{
      this.Repo1 = res;
      console.log(res);
    });

    this.reporteService.rep2().subscribe((res: Reporte1[])=>{
      //this.Repo1 = res;
      console.log(res);
    });

    this.reporteService.rep3().subscribe((res: Reporte1[])=>{
      //this.Repo1 = res;
      console.log(res);
    });

    this.reporteService.rep4().subscribe((res: Reporte1[])=>{
      //this.Repo1 = res;
      console.log(res);
    });
  }

  Repo1: Reporte1[]=[]

  
}
