import { Component, OnInit } from '@angular/core';
import { EbookService } from './ebook.service'; // Importe o EbookService
import { CommonModule } from '@angular/common'; // Importe o CommonModule para *ngIf e *ngFor
import { RouterModule } from '@angular/router'; // Importa o RouterModule para usar [routerLink]

@Component({
  selector: 'app-listing-ebook',
  standalone: true,  // Componente standalone
  imports: [CommonModule, RouterModule], // Adiciona CommonModule e RouterModule
  templateUrl: './listing-ebook.component.html',
  styleUrls: ['./listing-ebook.component.css'],
})
export class ListingEbookComponent implements OnInit {
  livros: any[] = []; // Array para armazenar os livros

  constructor(private ebookService: EbookService) {} // Injeta o EbookService

  ngOnInit(): void {
    // Chama o método getLivros ao iniciar o componente
    this.ebookService.getLivros().subscribe(
      (data) => {
        this.livros = data; // Armazena os livros recebidos na variável 'livros'
      },
      (error) => {
        console.error('Erro ao carregar os livros', error);
      }
    );
  }
}
