import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3001/auth/login';  // URL do seu backend NestJS

  constructor(private http: HttpClient) { }

  login(email: string, senha: string): Observable<{ access_token: string }> {
    return this.http.post<{ access_token: string }>(this.apiUrl, { email, senha });
  }

  // Método para armazenar o token no localStorage
  storeToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  // Método para pegar o token do localStorage
  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  // Método para verificar se o token está presente
  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  // Método para limpar o token (logout)
  logout(): void {
    localStorage.removeItem('access_token');
  }
}
