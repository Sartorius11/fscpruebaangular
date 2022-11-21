import { Component, OnInit } from '@angular/core';
import { CuboSevice } from 'src/app/services/cubo.services';
import { Cubo } from 'src/app/models/cubo';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public cubos!: Array<Cubo>;

  constructor(private _service: CuboSevice) { }
  ngOnInit(): void {
    this._service.getCubos().subscribe(response => {
      this.cubos = response;
    });



    this.loadSelect();
  }

  loadSelect():void{
    this._service.getCubosId().subscribe(response=>{{
      
    }})
  }
}
