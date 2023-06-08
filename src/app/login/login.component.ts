import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  email: any;

  constructor(private http: HttpClient, private authService: AuthService) {}

  onSubmit() {
    const credentials = {
      email: this.email,
      password: this.password
    };

    this.http.post<any>('http://154.38.164.207:8080/usuario/login', credentials).subscribe(
  response => {
    console.log('Autenticación exitosa');
    console.log(response);

    if (response.tipoUsuario === '1') {
      this.authService.setLoggedIn(true);
      this.authService.setUserType('1');
      // Redirigir a la página de empleados
      // ...
    } else if (response.tipoUsuario === '2') {
      this.authService.setLoggedIn(true);
      this.authService.setUserType('2');
      // Redirigir a la página de clientes
      // ...
    } else {
      console.log('Tipo de usuario desconocido');
      // Mostrar mensaje de error o redirigir a una página de error
      // ...
    }
  },
  // ...
);
  }
}
