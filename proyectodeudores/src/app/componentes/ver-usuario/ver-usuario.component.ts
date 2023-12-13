import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../../servicios/service-usuario/formulario.service';

@Component({
  selector: 'app-ver-usuario',
  templateUrl: './ver-usuario.component.html',
  styleUrls: ['./ver-usuario.component.css']
})
export class VerUsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private FormularioService: FormularioService) {}

  ngOnInit(): void {
    console.log('Iniciando componente VerUsuariosComponent');
    this.obtenerYActualizarUsuarios();
  }

  obtenerYActualizarUsuarios() {
    this.FormularioService.obtenerUsuarios().subscribe(
      (data: any) => {
        console.log('Datos obtenidos correctamente');
        this.usuarios = data.usuarios.reverse();
        this.mostrarUltimoUsuario();
      },
      (error) => {
        console.error('Error al obtener usuarios', error);
      }
    );
  }

  mostrarUltimoUsuario() {
    if (this.usuarios.length > 0) {
      const ultimoUsuario = this.usuarios[this.usuarios.length - 1];
      console.log('Último Usuario:', ultimoUsuario);
    }
  }
}