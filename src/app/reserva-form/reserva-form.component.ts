import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Reserva {
  id!: number;
  usuario!: string;
  vuelo!: string;
  fechaReserva!: string;
  horaReserva!: string;
}

@Component({
  selector: 'app-reserva-form',
  templateUrl: './reserva-form.component.html',
  styleUrls: ['./reserva-form.component.css']
})
export class ReservaFormComponent {
  reserva: Reserva = new Reserva();

  constructor(private http: HttpClient) { }

  guardarReserva() {
    this.http.post<Reserva>('http://154.38.164.207:8080/api/reservas', this.reserva).subscribe(
      response => {
        console.log('Reserva guardada exitosamente:', response);
        // Aquí puedes realizar acciones adicionales después de guardar la reserva
      },
      error => {
        console.error('Error al guardar la reserva:', error);
      }
    );
  }
}
