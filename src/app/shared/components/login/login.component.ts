import { Component, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // Importamos FormsModule para trabajar con NgForm
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loading = signal(false);
  errorMessage = signal('');
  
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  async login(form: NgForm): Promise<void> {
    if (!form.valid) {
      this.errorMessage.set('Por favor, complete todos los campos correctamente.');
      return;
    }

    this.loading.set(true);
    this.errorMessage.set('');

    try {
      const { email, password } = form.value;
      await this.authService.login(email, password);
    } catch (error: any) {
      console.error('Login error:', error);
      this.errorMessage.set(this.getErrorMessage(error?.code));
    } finally {
      this.loading.set(false);
    }
  }

  private getErrorMessage(code: string): string {
    switch (code) {
      case 'auth/user-not-found':
        return 'No existe una cuenta con este correo electrónico';
      case 'auth/wrong-password':
        return 'Contraseña incorrecta';
      case 'auth/invalid-email':
        return 'Correo electrónico inválido';
      case 'auth/user-disabled':
        return 'Esta cuenta ha sido deshabilitada';
      case 'auth/too-many-requests':
        return 'Demasiados intentos fallidos. Por favor, intente más tarde';
      default:
        return 'Error al iniciar sesión. Por favor, intente nuevamente';
    }
  }
}