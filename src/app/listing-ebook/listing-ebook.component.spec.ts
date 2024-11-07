import { Component, OnInit } from '@angular/core';
import { EbookService } from '../ebook.service'; // Importe o EbookService

@Component({
  selector: 'app-listing-ebook',
  templateUrl: './listing-ebook.component.html',
  styleUrls: ['./listing-ebook.component.css'],
})
export class ListingEbookComponent implements OnInit {
  livros: any[] = []; // Array para armazenar os livros

  constructor(private ebookService: EbookService) {} // Injeta o serviço

  ngOnInit(): void {
    this.ebookService.getLivros().subscribe(
      (data) => {
        this.livros = data;
      },
      (error) => {
        console.error('Erro ao carregar os livros', error);
      }
    );
  }
}
