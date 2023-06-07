import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../app/auth.service'; // Asegúrate de que la ruta de importación sea correcta


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authService.getIsLoggedIn()) {
      // El usuario ha iniciado sesión, permitir el acceso a la ruta
      return true;
    } else {
      // El usuario no ha iniciado sesión, redirigir a la página de inicio de sesión
      this.router.navigate(['/login']);
      return false;
    }
  }
}
