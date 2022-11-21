import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/cubo';
import { CuboSevice } from 'src/app/services/cubo.services';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {
  public cubos! : Array<Cubo>
  constructor(private _service: CuboSevice) { }
  ngOnInit(): void {
    this._service.getCubosId().subscribe(response=>{
      this.cubos = response;
    })
  }

}
// aqui he intentado recoger los cubos por su id Marca