import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3001/auth/login'; 

  constructor(private http: HttpClient) { }

  login(email: string, senha: string): Observable<{ access_token: string }> {
    return this.http.post<{ access_token: string }>(this.apiUrl, { email, senha });
  }

  storeToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }
}
