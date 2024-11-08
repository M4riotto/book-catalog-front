import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EbookService } from '../ebook.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editing-ebook',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './editing-ebook.component.html',
  styleUrls: ['./editing-ebook.component.css'],
})
export class EditingEbookComponent implements OnInit {
  livroForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private ebookEditingService: EbookService
  ) {
    this.livroForm = this.formBuilder.group({
      titulo: [''],
      autor: [''],
      descricao: [''],
      anoPublicacao: [''],
      imageURL: [''],
    });
  }

  ngOnInit(): void {
    const livroId = this.route.snapshot.paramMap.get('id');
    if (livroId) {
      this.ebookEditingService.getLivroDetalhes(livroId).subscribe((livro) => {
        this.livroForm.patchValue(livro);
      });
    }
  }

  salvarLivro(): void {
    const livroId = this.route.snapshot.paramMap.get('id');
    if (livroId && this.livroForm.valid) {
      this.ebookEditingService
        .editLivro(livroId, this.livroForm.value)
        .subscribe(
          () => {
            console.log('Livro atualizado com sucesso');
            this.router.navigate(['/']);
          },
          (error) => {
            console.error('Erro ao atualizar o livro', error);
          }
        );
    }
  }

  cancelar(): void {
    this.router.navigate(['/']); 
  }
}
