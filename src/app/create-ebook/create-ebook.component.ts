import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EbookService } from '../ebook.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-ebook',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-ebook.component.html',
  styleUrls: ['./create-ebook.component.css'],
})
export class CreateEbookComponent {
  livroForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ebookCreateService: EbookService
  ) {
    this.livroForm = this.formBuilder.group({
      titulo: [''],
      autor: [''],
      descricao: [''],
      anoPublicacao: [''],
      imageURL: [''],
    });
  }

  salvarLivro(): void {
    if (this.livroForm.valid) {
      this.ebookCreateService.createLivro(this.livroForm.value).subscribe(
        () => {
          console.log('Livro criado com sucesso');
          this.router.navigate(['/']); 
        },
        (error) => {
          console.error('Erro ao criar o livro', error);
        }
      );
    }
  }

  cancelar(): void {
    this.router.navigate(['/']);
  }
}
