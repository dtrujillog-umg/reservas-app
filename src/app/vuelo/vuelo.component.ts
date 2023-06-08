import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Vuelo {
  numeroVuelo: string;
  origen: string;
  destino: string;
  fechaSalida: string;
  horaSalida: string;
  fechaLlegada: string;
  horaLlegada: string;
}

@Component({
  selector: 'http://154.38.164.207:8080/vuelo/lista',
  templateUrl: './vuelo.component.html',
  styleUrls: ['./vuelo.component.css']
})
export class VuelosComponent implements OnInit {
  vuelos: Vuelo[] = [];
  fechaActual: string | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fechaActual = this.getFormattedDate(new Date());
    this.listarVuelos();
  }

  listarVuelos() {
    this.http.get<Vuelo[]>('http://154.38.164.207:8080/vuelo/lista')
      .subscribe(
        (response) => {
          this.vuelos = response;
        },
        (error) => {
          console.error('Error al obtener los vuelos', error);
        }
      );
  }

  listarProximosVuelos() {
    // Obtener la fecha de mañana
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const fechaMañana = this.getFormattedDate(tomorrow);

    this.http.get<Vuelo[]>('http://154.38.164.207:8080/vuelo/lista?fecha=' + fechaMañana)
      .subscribe(
        (response) => {
          this.vuelos = response;
        },
        (error) => {
          console.error('Error al obtener los vuelos para fechas futuras', error);
        }
      );
  }

  private getFormattedDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
}
