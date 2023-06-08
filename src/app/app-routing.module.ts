import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './login/login.component';
import { EpleadoComponentComponent } from './epleado-component/epleado-component.component';

import { ClienteComponentComponent } from './cliente-component/cliente-component.component';
import { AuthGuard } from './auth.guard';
import { UsuarioComponent } from './usuario/usuario.component';
import { VerusuarioComponent } from './verusuario/verusuario.component';
import { CrearVueloComponent } from './crear-vuelo/crear-vuelo.component';
import { VuelosComponent } from './vuelo/vuelo.component';
import { Reserva, ReservaFormComponent } from './reserva-form/reserva-form.component';
import { PiedepaginaComponent } from './piedepagina/piedepagina.component';




const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' }, // Redirecciona a /menu por defecto
  { path: 'menu', component: MenuComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'login', component: LoginComponent },
  { path: 'empleado', component: EpleadoComponentComponent, canActivate: [AuthGuard], data: { userType: '1' } },
  { path: 'cliente', component: ClienteComponentComponent, canActivate: [AuthGuard], data: { userType: '2' } },
  { path: 'usuario', component: UsuarioComponent},
  { path: 'verusuario', component: VerusuarioComponent},
  { path: 'crearvuelo', component: CrearVueloComponent},
  { path: 'vervuelos', component: VuelosComponent},
  { path: 'Reserva', component: ReservaFormComponent},
  { path: 'Pie', component: PiedepaginaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
