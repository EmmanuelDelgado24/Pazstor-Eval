import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

//export const FirebaseResolver: ResolveFn<any[]> = () => {
//  return inject(FirebaseService).getData('ingenieria');
//};

//export const FirebaseResolver: (collectionName: string) => ResolveFn<any[]> = (collectionName) => {
//  return () => inject(FirebaseService).getData(collectionName);
//};

export const FirebaseIngenieriaResolver: ResolveFn<any[]> = () => {
  return inject(FirebaseService).getData('ingenieria');
};

export const FirebaseProduccionResolver: ResolveFn<any[]> = () => {
  return inject(FirebaseService).getData('produccion');
};

export const FirebaseComprasResolver: ResolveFn<any[]> = () => {
  return inject(FirebaseService).getData('compras');
};

export const FirebaseCalidadResolver: ResolveFn<any[]> = () => {
  return inject(FirebaseService).getData('calidad');
};

export const FirebaseDohResolver: ResolveFn<any[]> = () => {
  return inject(FirebaseService).getData('rh');
};

export const FirebaseJFPResolver: ResolveFn<any[]> = () => {
  return inject(FirebaseService).getData('planta');
};

export const FirebasePCPResolver: ResolveFn<any[]> = () => {
  return inject(FirebaseService).getData('ppcp');
};


