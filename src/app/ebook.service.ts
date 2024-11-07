import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EbookService {
  private apiUrl = 'http://localhost:3001/livros';

  constructor(private http: HttpClient) {}

  // Método para pegar a lista de livros
  getLivros(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Método para pegar os detalhes de um livro específico
  getLivroDetalhes(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Método para criar um novo livro
  createLivro(livroData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, livroData);
  }

  // Método para editar um livro existente
  editLivro(id: string, livroData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, livroData);
  }

  // Método para deletar um livro
  deleteLivro(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
