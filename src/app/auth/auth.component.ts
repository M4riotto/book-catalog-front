import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Para redirecionar após login
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, senha } = this.loginForm.value;
    this.authService.login(email, senha).subscribe({
      next: (response) => {
        localStorage.setItem('access_token', response.access_token);  // Salva o token no localStorage
        this.router.navigate(['/']);  // Redireciona para a página principal após login
      },
      error: (err) => {
        console.error('Erro no login', err);
        alert('Credenciais inválidas');
      }
    });
  }
}
