import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EgresosService } from '../../servicios/service-egresos/egresos.service';


interface Registro {
  _id: string;
  descripcion: string;
  precio: number;
  rut: string;
  nombre: string;
  apellido: string;
  email: string;
  id: string;
}


@Component({
  selector: 'app-ver-egreso',
  templateUrl: './ver-egreso.component.html',
  styleUrls: ['./ver-egreso.component.css']
})


export class VerEgresoComponent implements OnInit {

  registros: Registro [] = []
  veregreso:FormGroup;
  


  constructor(
    private EgresosService: EgresosService,
    private fb: FormBuilder
  ){
    this.veregreso = this.fb.group({
      id_usuario:['']
    })
  }
  
  ngOnInit(): void {
    this.buscaregreso()
    
  }
  buscaregreso(){
    this.EgresosService.buscar_egreso().subscribe(
      (data: any) => {
        console.log('Respuesta del servicio:', data);
  
        if (Array.isArray(data.egresos)) {
          this.registros = data.egresos.map((item: any) => {
            const usuario = item.id_usuario || {};
  
            return {
              _id: item._id,
              descripcion: item.descripcion,
              precio: item.precio,
              rut: usuario.rut || '',
              nombre: usuario.nombre || '',
              apellido: usuario.apellido || '',
              email: usuario.correo || '',
              id: usuario._id || ''
            };
          });
        }
      },
      (error: any) => {
        console.error('Error al obtener egresos:', error);
      }
    );
  }

  buscarusuario() {
    if (this.veregreso.valid) {
      const id_usuario = this.veregreso.get('id_usuario')?.value.trim();
  
      if (!id_usuario) {
        this.buscaregreso();
      } else {
        this.EgresosService.buscarUsuario(id_usuario).subscribe(
          (data: any) => {
            if (Array.isArray(data.egresos_usuario)) {
              this.registros = data.egresos_usuario.map((item: any) => {
                const id_usuario = item.id_usuario;
                const id = id_usuario?._id || '';
                const nombre = id_usuario?.nombre || '';
                const apellido = id_usuario?.apellido || '';
                const rut = id_usuario?.rut || '';
                const email = id_usuario?.correo || '';
  
                return {
                  _id: item._id,
                  descripcion: item.descripcion,
                  precio: item.precio,
                  rut: rut,
                  nombre: nombre,
                  apellido: apellido,
                  email: email,
                  id: id
                };
              });
            }
          },
          (error: any) => {
            console.error('Error al obtener egresos por usuario:', error);
          }
        );
      }
    }
  }
}