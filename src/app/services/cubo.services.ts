import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
@Injectable()
export class CuboSevice {

    constructor(private _http: HttpClient){}

    //EN SERVICIOS  METO TODAS LAS ACCIONES QUE NECESITO PARA
    //RECOGER DATOS DE LA API 
    
    getCubos(): Observable<any>{
        var request = "/api/Cubos";
        var url = environment.urlApiCubo + request;
        return this._http.get(url);
    }

    getCubosId(): Observable<any>{
        var request = "/api/Cubos/Marcas";
        var url = environment.urlApiCubo + request;
        return this._http.get(url);
    }


}
