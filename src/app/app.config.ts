import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';
import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'pazstor-fd17f',
        appId: '1:671964022533:web:f841b8ae78b501188a196c',
        storageBucket: 'pazstor-fd17f.appspot.com',
        apiKey: 'AIzaSyAL1VL6mzvwBMKzx_-bmHk2aP9ho_nsYEA',
        authDomain: 'pazstor-fd17f.firebaseapp.com',
        messagingSenderId: '671964022533',
        measurementId: 'G-6EYFVG1XGR',
      })
    ),
    provideFirestore(() => getFirestore()), provideAnimationsAsync(),
  ],
};
