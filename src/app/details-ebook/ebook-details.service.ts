import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EbookDetailsService {
  
  private apiUrl = 'http://localhost:3001/livros'; // URL base sem o id

  constructor(private http: HttpClient) {}

  // Método para pegar os detalhes do livro
  getLivroDetalhes(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`); // Incluindo o id na URL
  }
  

  // Método para deletar o livro
  deleteLivro(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
  
}
