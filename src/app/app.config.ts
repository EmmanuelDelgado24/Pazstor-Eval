// app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { 
  getAuth, 
  provideAuth, 
  indexedDBLocalPersistence,
  initializeAuth,
  browserLocalPersistence 
} from '@angular/fire/auth';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    
    // Firebase config
    provideFirebaseApp(() => {
      const app = initializeApp({
        projectId: 'pazstor-fd17f',
        appId: '1:671964022533:web:f841b8ae78b501188a196c',
        storageBucket: 'pazstor-fd17f.appspot.com',
        apiKey: 'AIzaSyAL1VL6mzvwBMKzx_-bmHk2aP9ho_nsYEA',
        authDomain: 'pazstor-fd17f.firebaseapp.com',
        messagingSenderId: '671964022533',
        measurementId: 'G-6EYFVG1XGR',
      });
      
      // Inicializar auth con persistencia
      const auth = initializeAuth(app, {
        persistence: [indexedDBLocalPersistence, browserLocalPersistence]
      });
      
      return app;
    }),
    
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideAnimationsAsync(),
  ],
};