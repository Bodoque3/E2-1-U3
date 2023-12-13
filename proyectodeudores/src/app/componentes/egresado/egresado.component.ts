import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EgresosService } from '../../servicios/service-egresos/egresos.service'; 
import { Schema } from 'mongoose';

@Component({
  selector: 'app-egresado',
  templateUrl: './egresado.component.html',
  styleUrls: ['./egresado.component.css']
}) 
export class EgresadoComponent implements OnInit {
  Egresado: any;
  registros: any;
  registro_enviar = {
    Descripcion: null, 
    Precio: null,      
    Id_usuario: {
      type: Schema.ObjectId,
      ref: 'Usuario',
      default: null
    }
  };

  constructor(
    private egresoSrv:EgresosService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.Egresado = this.fb.group({
      Descripcion:['',[Validators.required]],
      Precio:[''],
      Id_usuario:['']
    });
  }
  get formularioReactivo(){
    return this.Egresado.controls;
  }

  enviar_egreso(){
    this.registro_enviar.Descripcion = this.formularioReactivo.Descripcion.value;
    this.registro_enviar.Precio = this.formularioReactivo.Precio.value;
    this.registro_enviar.Id_usuario = this.formularioReactivo.Id_usuario.value;
    this.egresoSrv.crear_egreso(this.registro_enviar).subscribe(
      (Response:any) => {
        this.Egresado = Response.Egresado;
        console.log(this.Egresado);
      },Error =>{
        console.log(Error);
      }
    )
  }

  eliminar_egreso(_id:any){
    console.log(_id);
  }
}
