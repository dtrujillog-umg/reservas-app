import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { DatePipe } from '@angular/common';


import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { EpleadoComponentComponent } from './epleado-component/epleado-component.component';
import { ClienteComponentComponent } from './cliente-component/cliente-component.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { VerusuarioComponent } from './verusuario/verusuario.component';
import { CrearVueloComponent } from './crear-vuelo/crear-vuelo.component';
import { VuelosComponent } from './vuelo/vuelo.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarouselComponent,
    LoginComponent,
    EpleadoComponentComponent,
    ClienteComponentComponent,
    UsuarioComponent,
    VerusuarioComponent,
    CrearVueloComponent,
    VuelosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
