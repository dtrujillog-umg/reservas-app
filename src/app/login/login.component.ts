import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  email: any;

  constructor(private http: HttpClient) {}

  onSubmit() {
    const credentials = {
      email: this.email,
      password: this.password
    };
  
    this.http.post<any>('http://localhost:8080/usuario/login', credentials).subscribe(
      response => {
        // Autenticación exitosa: redireccionar a la página de inicio o a la ruta deseada
        console.log('Autenticación exitosa');
        // Aquí puedes agregar el código para redireccionar a otra página o ruta dentro de tu aplicación
      },
      error => {
        // Autenticación fallida: mostrar un mensaje de error o realizar alguna acción adicional
        console.log('Autenticación fallida');
        // Aquí puedes agregar el código para mostrar un mensaje de error en el formulario o realizar alguna acción adicional
      }
    );
  }
  
}
