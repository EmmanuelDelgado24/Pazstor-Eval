// auth.service.ts
import { Injectable, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  User,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: Auth = inject(Auth);
  private router: Router = inject(Router);

  private currentUser = signal<User | null>(null);
  private initialized = signal(false);

  readonly isAuthenticated = computed(() => !!this.currentUser());

  constructor() {
    this.initializeAuth();
  }

  private initializeAuth(): void {
    let initialCheck = true; // Bandera para evitar redirección inmediata al cargar
    onAuthStateChanged(
      this.auth,
      (user) => {
        console.log('Auth state changed:', user ? 'User logged in' : 'No user');
        this.currentUser.set(user);
        this.initialized.set(true);
  
        // Solo redirigir si es la primera vez que cambia el estado
        if (user && window.location.pathname === '/login' && !initialCheck) {
          this.router.navigate(['/ingenieria']);
        }
        initialCheck = false; // Estado inicial procesado
      },
      (error) => {
        console.error('Auth state change error:', error);
        this.initialized.set(true);
      }
    );
  }
  
  /*private initializeAuth(): void {
    onAuthStateChanged(this.auth,
      (user) => {
        console.log('Auth state changed:', user ? 'User logged in' : 'No user');
        this.currentUser.set(user);
        this.initialized.set(true);

        // Solo redirigir si el usuario está en login y está autenticado
        if (user && window.location.pathname === '/login') {
          this.router.navigate(['/ingenieria']);
        }
      },
      (error) => {
        console.error('Auth state change error:', error);
        this.initialized.set(true);
      }
    );
  }*/

  /*private initializeAuth(): void {
    onAuthStateChanged(
      this.auth,
      async (user) => {
        console.log('El estado de autenticación cambió:', user ? 'Usuario registrado' : 'Ningún usuario');
        this.currentUser.set(user);
        this.initialized.set(true);

        // Validar si la ruta actual es `/login` y el usuario está autenticado
        if (user) {
          const token = await user.getIdToken();
          if (window.location.pathname === '/login') {
            // Solo redirigir si el usuario accede manualmente a `/login`
            this.router.navigate(['/ingenieria']);
          }
        }
      },
      (error) => {
        console.error('Error de cambio de estado de autenticación:', error);
        this.initialized.set(true);
      }
    );
  }*/

  async login(email: string, password: string): Promise<void> {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      if (userCredential.user) {
        await this.router.navigate(['/ingenieria']);
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
      await this.router.navigate(['/login']);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }

  isInitialized(): boolean {
    return this.initialized();
  }

  getCurrentUser(): User | null {
    return this.currentUser();
  }
}




