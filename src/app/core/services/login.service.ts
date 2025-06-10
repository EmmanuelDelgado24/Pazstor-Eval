import { Injectable, signal, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  Auth,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly AUTH_KEY = 'firebase_auth';
  private readonly PERSISTENCE_KEY = 'firebase_persistence';
  
  private currentUser = signal<User | null>(null);
  private token = signal<string>('');
  readonly isAuthenticated = computed(() => !!this.currentUser());

  private auth: Auth = inject(Auth);
  private router = inject(Router);
  private initialized = signal<boolean>(false);

  constructor() {
    this.initializeAuth().then(() => {
      this.initialized.set(true);
    });
  }

  private async initializeAuth() {
    try {
      // Restaurar sesión desde localStorage
      const savedUserData = localStorage.getItem(this.PERSISTENCE_KEY);
      const savedToken = localStorage.getItem(this.AUTH_KEY);
      
      if (savedUserData && savedToken) {
        const userData = JSON.parse(savedUserData);
        this.token.set(savedToken);
      }

      // Observer para cambios en la autenticación
      onAuthStateChanged(this.auth, async (user) => {
        if (user) {
          try {
            const currentToken = this.token();
            if (!currentToken) {
              const newToken = await user.getIdToken();
              this.token.set(newToken);
              localStorage.setItem(this.AUTH_KEY, newToken);
            }
            
            this.currentUser.set(user);
            localStorage.setItem(
              this.PERSISTENCE_KEY,
              JSON.stringify({
                uid: user.uid,
                email: user.email,
                emailVerified: user.emailVerified,
                lastLogin: new Date().toISOString(),
              })
            );

            if (window.location.pathname === '/login') {
              await this.router.navigate(['/ingenieria']);
            }
          } catch (error) {
            console.error('Error al procesar usuario autenticado:', error);
          }
        } else {
          this.handleLogout();
        }
      });

    } catch (error) {
      console.error('Error al inicializar auth:', error);
      throw error;
    }
  }

  private async handleLogout() {
    this.token.set('');
    this.currentUser.set(null);
    localStorage.removeItem(this.AUTH_KEY);
    localStorage.removeItem(this.PERSISTENCE_KEY);
    
    if (window.location.pathname !== '/login') {
      await this.router.navigate(['/login']);
    }
  }

  
  async login(email: string, password: string): Promise<boolean> {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      if (userCredential.user) {
        const token = await userCredential.user.getIdToken();
        this.token.set(token);
        localStorage.setItem(this.AUTH_KEY, token);
        await this.router.navigate(['/ingenieria']);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error;
    }
  }

  async logout(): Promise<boolean> {
    try {
      await signOut(this.auth);
      await this.handleLogout();
      return true;
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      throw error;
    }
  }

  // Método para verificar si el servicio está listo
  isInitialized(): boolean {
    return this.initialized();
  }

  getIdToken(): string {
    return this.token();
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated();
  }

  getCurrentUser(): User | null {
    return this.currentUser();
  }

  async refreshToken(): Promise<string> {
    const user = this.currentUser();
    if (!user) {
      throw new Error('No hay usuario autenticado');
    }
    
    try {
      const newToken = await user.getIdToken(true);
      this.token.set(newToken);
      localStorage.setItem(this.AUTH_KEY, newToken);
      return newToken;
    } catch (error) {
      console.error('Error al refrescar token:', error);
      throw error;
    }
  }
}