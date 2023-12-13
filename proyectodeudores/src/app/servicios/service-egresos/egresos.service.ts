import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class EgresosService {

  url_backend = environment.url_backend+'/Egreso';
  constructor(private http:HttpClient) { }

  crear_egreso(egres:any){
    return this.http.post(`${this.url_backend+'/crear-egreso'}`,egres);
  }

  buscar_egreso(){
    return this.http.get(`${this.url_backend}/buscar-egresos`);
  }

  
    obtener_egreso(){
      return this.http.get(`${this.url_backend}/obten-egresos`);
    }
  
    buscarUsuario(id_usuario: string) {
      const url = `${this.url_backend}/buscar-usuario/${id_usuario}`;
      return this.http.get(url);
    }
}
