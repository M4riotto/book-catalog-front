import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EbookService } from '../ebook.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-ebook',
  standalone: true, // Componente standalone
  imports: [CommonModule], // Adiciona CommonModule e RouterModule
  templateUrl: './details-ebook.component.html',
  styleUrls: ['./details-ebook.component.css'],
})
export class DetailsEbookComponent implements OnInit {
  livro: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router, // Adiciona o Router para redirecionar
    private ebookDetailsService: EbookService
  ) {}

  ngOnInit(): void {
    // Captura o parâmetro id da URL
    const livroId = this.route.snapshot.paramMap.get('id');
    if (livroId) {
      this.ebookDetailsService.getLivroDetalhes(livroId).subscribe((livro) => {
        this.livro = livro;
      });
    }
  }

  deletarLivro(): void {
    if (this.livro && this.livro.id) {
      this.ebookDetailsService.deleteLivro(this.livro.id).subscribe(
        () => {
          console.log('Livro deletado com sucesso');
          // Redireciona para a página de listagem ou outra página após a deleção
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Erro ao deletar o livro', error);
        }
      );
    }
  }

  editarLivro(): void {
    if (this.livro && this.livro.id) {
      this.router.navigate([`editar/livros/${this.livro.id}`]);
    }
  }

  cancelar(): void {
    this.router.navigate(['/']);
  }
}
