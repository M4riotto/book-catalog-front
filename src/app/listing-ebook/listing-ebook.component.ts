import { Component, OnInit } from '@angular/core';
import { EbookService } from '../ebook.service'; 
import { CommonModule } from '@angular/common'; 
import { RouterModule, Router } from '@angular/router'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-listing-ebook',
  standalone: true, 
  imports: [CommonModule, RouterModule, FormsModule], 
  templateUrl: './listing-ebook.component.html',
  styleUrls: ['./listing-ebook.component.css'],
})
export class ListingEbookComponent implements OnInit {
  livros: any[] = []; 
  filteredLivros: any[] = []; 
  searchQuery: string = ''; 

  constructor(private ebookService: EbookService ,
    private router: Router,) {} 

  ngOnInit(): void {
    
    this.ebookService.getLivros().subscribe(
      (data) => {
        this.livros = data; 
        this.filteredLivros = data; 
      },
      (error) => {
        console.error('Erro ao carregar os livros', error);
      }
    );
  }

  
  onSearchChange(): void {
    if (this.searchQuery.trim()) {
      this.filteredLivros = this.livros.filter((livro) =>
        livro.titulo.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        livro.autor.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredLivros = this.livros; 
    }
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.router.navigate(['/auth']);
    
  }
}
