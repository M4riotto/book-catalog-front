import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EbookService {
  private apiUrl = 'http://localhost:3001/livros'; // Endereço da sua rota no NestJS

  constructor(private http: HttpClient) {}

  getLivros(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
