import { Component, OnInit } from '@angular/core';
import { EbookService } from '../ebook.service'; 

@Component({
  selector: 'app-listing-ebook',
  templateUrl: './listing-ebook.component.html',
  styleUrls: ['./listing-ebook.component.css'],
})
export class ListingEbookComponent implements OnInit {
  livros: any[] = []; 

  constructor(private ebookService: EbookService) {} 

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
