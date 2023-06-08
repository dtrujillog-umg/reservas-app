import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  usuario = {
    nombre: '',
    email: '',
    password: '',
    tipoUsuario: ''
  };

  constructor(private http: HttpClient) {}

  crearUsuario() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post('http://154.38.164.207:8080/usuario/crear', this.usuario, httpOptions)
      .subscribe(
        () => {
          alert('Usuario creado');
          // Aquí puedes hacer algo con la respuesta del servidor, si es necesario
        },
        (error) => {
          alert('Error al crear usuario');
          // Aquí puedes manejar el error o mostrar un mensaje de error adecuado
        }
      );
  }
}
