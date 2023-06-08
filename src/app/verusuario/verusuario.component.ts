import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-verusuario',
  templateUrl: './verusuario.component.html',
  styleUrls: ['./verusuario.component.css']
})
export class VerusuarioComponent implements OnInit {
  usuarios!: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.http.get<any[]>('http://154.38.164.207:8080/usuario/lista').subscribe(
      (response) => {
        this.usuarios = response;
      },
      (error) => {
        console.log('Error al obtener la lista de usuarios:', error);
      }
    );
  }
}
