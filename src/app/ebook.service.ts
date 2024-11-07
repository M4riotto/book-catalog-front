import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EbookService {
  private apiUrl = 'http://localhost:3001/livros';

  constructor(private http: HttpClient) {}

  // Método para pegar a lista de livros
  getLivros(): Observable<any[]> {
    const token = localStorage.getItem('access_token'); // Recupera o token do localStorage ou onde for armazenado
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.get<any[]>(this.apiUrl, { headers });
  }

  // Método para pegar os detalhes de um livro específico
  getLivroDetalhes(id: string): Observable<any> {
    const token = localStorage.getItem('access_token'); // Recupera o token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.get<any>(`${this.apiUrl}/${id}`, { headers });
  }

  // Método para criar um novo livro
  createLivro(livroData: any): Observable<any> {
    const token = localStorage.getItem('access_token'); // Recupera o token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.post<any>(this.apiUrl, livroData, { headers });
  }

  // Método para editar um livro existente
  editLivro(id: string, livroData: any): Observable<any> {
    const token = localStorage.getItem('access_token'); // Recupera o token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.put<any>(`${this.apiUrl}/${id}`, livroData, { headers });
  }

  // Método para deletar um livro
  deleteLivro(id: string): Observable<any> {
    const token = localStorage.getItem('access_token'); // Recupera o token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.delete<any>(`${this.apiUrl}/${id}`, { headers });
  }

  // Método para buscar dados com autorização
  getDataWithAuth(): Observable<any> {
    const token = localStorage.getItem('auth_token'); // Recupera o token do localStorage ou onde for armazenado
    
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      
      return this.http.get<any>(`${this.apiUrl}/endpoint`, { headers });
    } else {
      // Caso não tenha token, retornar um erro ou comportamento adequado
      throw new Error('Token não encontrado');
    }
  }
}
