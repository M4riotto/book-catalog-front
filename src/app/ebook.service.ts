import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EbookService {
  private apiUrl = 'http://localhost:3001/livros';

  constructor(private http: HttpClient) {}

  
  getLivros(): Observable<any[]> {
    const token = localStorage.getItem('access_token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.get<any[]>(this.apiUrl, { headers });
  }

  
  getLivroDetalhes(id: string): Observable<any> {
    const token = localStorage.getItem('access_token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.get<any>(`${this.apiUrl}/${id}`, { headers });
  }

  
  createLivro(livroData: any): Observable<any> {
    const token = localStorage.getItem('access_token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.post<any>(this.apiUrl, livroData, { headers });
  }

  
  editLivro(id: string, livroData: any): Observable<any> {
    const token = localStorage.getItem('access_token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.put<any>(`${this.apiUrl}/${id}`, livroData, { headers });
  }

  
  deleteLivro(id: string): Observable<any> {
    const token = localStorage.getItem('access_token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.delete<any>(`${this.apiUrl}/${id}`, { headers });
  }

  
  getDataWithAuth(): Observable<any> {
    const token = localStorage.getItem('auth_token'); 
    
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      
      return this.http.get<any>(`${this.apiUrl}/endpoint`, { headers });
    } else {
      
      throw new Error('Token não encontrado');
    }
  }
}
