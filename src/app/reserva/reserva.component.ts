import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {
  reserva!: FormGroup;
  vuelos: Vuelo[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.reserva = new FormGroup({
      idUsuario: new FormControl(null, Validators.required),
      idVuelo: new FormControl(null, Validators.required),
      fechaReserva: new FormControl(null, Validators.required),
      horaReserva: new FormControl(null, Validators.required),
    });

    this.loadVuelos();
  }

  loadVuelos() {
    this.http.get<Vuelo[]>('/api/vuelos/lista').subscribe(data => {
      this.vuelos = data;
    });
  }

  handleSubmit() {
    if (this.reserva.valid) {
      const reserva = this.reserva.value;
      this.http.post('/api/reservas', reserva).subscribe(() => {
        // La reserva se creó correctamente, puedes realizar otras acciones aquí
      });
    }
  }
}

interface Vuelo {
  id: number;
  numero_vuelo: string;
  origen: string;
  destino: string;
}
