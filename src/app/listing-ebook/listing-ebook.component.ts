import { Component, OnInit } from '@angular/core';
import { EbookService } from '../ebook.service'; // Importe o EbookService
import { CommonModule } from '@angular/common'; // Importe o CommonModule para *ngIf e *ngFor
import { RouterModule } from '@angular/router'; // Importa o RouterModule para usar [routerLink]
import { FormsModule } from '@angular/forms'; // Importe FormsModule para usar ngModel

@Component({
  selector: 'app-listing-ebook',
  standalone: true, // Componente standalone
  imports: [CommonModule, RouterModule, FormsModule], // Adiciona FormsModule aqui
  templateUrl: './listing-ebook.component.html',
  styleUrls: ['./listing-ebook.component.css'],
})
export class ListingEbookComponent implements OnInit {
  livros: any[] = []; // Array para armazenar os livros
  filteredLivros: any[] = []; // Array para armazenar os livros filtrados
  searchQuery: string = ''; // Valor do campo de busca

  constructor(private ebookService: EbookService) {} // Injeta o EbookService

  ngOnInit(): void {
    // Chama o método getLivros ao iniciar o componente
    this.ebookService.getLivros().subscribe(
      (data) => {
        this.livros = data; // Armazena os livros recebidos na variável 'livros'
        this.filteredLivros = data; // Inicializa os livros filtrados com todos os livros
      },
      (error) => {
        console.error('Erro ao carregar os livros', error);
      }
    );
  }

  // Método para filtrar livros
  onSearchChange(): void {
    if (this.searchQuery.trim()) {
      this.filteredLivros = this.livros.filter((livro) =>
        livro.titulo.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        livro.autor.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredLivros = this.livros; // Se não houver consulta, exibe todos os livros
    }
  }
}
