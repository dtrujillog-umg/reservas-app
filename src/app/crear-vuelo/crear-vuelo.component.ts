import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-crear-vuelo',
  templateUrl: './crear-vuelo.component.html',
  styleUrls: ['./crear-vuelo.component.css']
})
export class CrearVueloComponent {
  vuelo = {
    numeroVuelo: '',
    origen: '',
    destino: '',
    fechaSalida: '',
    horaSalida: '',
    fechaLlegada: '',
    horaLlegada: ''
  };

  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  crearVuelo() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    // Formatear la fecha en el formato requerido
    const fechaSalidaFormateada = this.datePipe.transform(this.vuelo.fechaSalida, 'yyyy-MM-dd');

    // Asegurarse de que la hora de salida tenga siempre segundos
    const horaSalidaFormateada = this.vuelo.horaSalida + ':00';

    // Asegurarse de que la hora de llegada tenga siempre segundos
    const horaLlegadaFormateada = this.vuelo.horaLlegada + ':00';

    // Actualizar las propiedades fechaSalida, horaSalida y horaLlegada en el objeto vuelo
    this.vuelo.fechaSalida = fechaSalidaFormateada as string;
    this.vuelo.horaSalida = horaSalidaFormateada as string;
    this.vuelo.horaLlegada = horaLlegadaFormateada as string;

    // Mostrar en la consola el objeto vuelo en formato JSON
    console.log(JSON.stringify(this.vuelo));

    this.http.post('http://154.38.164.207:8080/vuelo/crear', this.vuelo, { headers })
      .subscribe(
        () => {
          alert('Vuelo creado');
          // Aquí puedes hacer algo con la respuesta del servidor, si es necesario
        },
        (error) => {
          alert('Error al crear vuelo');
          // Aquí puedes manejar el error o mostrar un mensaje de error adecuado
        }
      );
  }
}
