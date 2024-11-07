import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Certifique-se de que o AuthService está configurado corretamente

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const token = this.authService.getToken();

    // Se o token não estiver presente ou for inválido
    if (!token) {
      this.router.navigate(['/auth']);  // Redireciona para a página de login
      return false;
    }

    // Se o token estiver presente, permite o acesso à rota
    return true;
  }
}
