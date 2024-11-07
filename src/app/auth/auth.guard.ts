import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = localStorage.getItem('access_token');  // Verifica se o token está presente no localStorage
    if (!token) {
      this.router.navigate(['/auth']);  // Se não estiver autenticado, redireciona para a página de login
      return false;
    }
    return true;
  }
}
