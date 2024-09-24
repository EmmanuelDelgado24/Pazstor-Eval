import { Routes } from '@angular/router';
//import { FirebaseResolver } from './core/resolvers/firebase.service';
import { FirebaseIngenieriaResolver, FirebaseProduccionResolver, FirebaseComprasResolver, FirebaseCalidadResolver, FirebaseDohResolver, FirebaseJFPResolver, FirebasePCPResolver } from './core/resolvers/firebase.service';

export const routes: Routes = [
  //INGENIERIA
  {
    path: '',
    redirectTo: 'ingenieria',
    pathMatch: 'full',
  },
  {
    path: 'ingenieria',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Ingenieria',
  },
  {
    path: 'estadisticas',
    loadComponent: () =>
      import('./pages/estadisticas/estadisticas.component').then(
        (m) => m.EstadisticasComponent
      ),
    title: 'Estadisticas',
    resolve: {
      documents: FirebaseIngenieriaResolver,
    },
  },
  //PRODUCCION
  {
    path: '',
    redirectTo: 'produccion',
    pathMatch: 'full',
  },
  {
    path: 'produccion',
    loadComponent: () =>
      import('./pages/produccion/produccion.component').then(
        (m) => m.ProduccionComponent
      ),
    title: 'Produccion',
  },
  {
    path: 'estadisticas2',
    loadComponent: () =>
      import('./pages/estadisticas2/estadisticas2.component').then(
        (m) => m.Estadisticas2Component
      ),
    title: 'Estadisticas',
    resolve: {
      documents: FirebaseProduccionResolver,
    },
  },
  //COMPRAS
  {
    path: '',
    redirectTo: 'compras',
    pathMatch: 'full',
  },
  {
    path: 'compras',
    loadComponent: () =>
      import('./pages/compras/compras.component').then(
        (m) => m.ComprasComponent
      ),
    title: 'Compras',
  },
  {
    path: 'estadisticas3',
    loadComponent: () =>
      import('./pages/estadisticas3/estadisticas3.component').then(
        (m) => m.Estadisticas3Component
      ),
    title: 'Estadisticas',
    resolve: {
      documents: FirebaseComprasResolver,
    },
  },
  //CALIDAD
  {
    path: '',
    redirectTo: 'calidad',
    pathMatch: 'full',
  },
  {
    path: 'calidad',
    loadComponent: () =>
      import('./pages/calidad/calidad.component').then(
        (m) => m.CalidadComponent
      ),
    title: 'Calidad',
  },
  {
    path: 'estadisticas4',
    loadComponent: () =>
      import('./pages/estadisticas4/estadisticas4.component').then(
        (m) => m.Estadisticas4Component
      ),
    title: 'Estadisticas',
    resolve: {
      documents: FirebaseCalidadResolver,
    },
  },
  //DOH
  {
    path: '',
    redirectTo: 'doh',
    pathMatch: 'full',
  },
  {
    path: 'doh',
    loadComponent: () =>
      import('./pages/doh/doh.component').then((m) => m.DohComponent),
    title: 'Doh',
  },
  {
    path: 'estadisticas5',
    loadComponent: () =>
      import('./pages/estadisticas5/estadisticas5.component').then(
        (m) => m.Estadisticas5Component
      ),
    title: 'Estadisticas',
    resolve: {
      documents: FirebaseDohResolver,
    },
  },
  //JEFE DE PLANTA
  {
    path: '',
    redirectTo: 'planta',
    pathMatch: 'full',
  },
  {
    path: 'planta',
    loadComponent: () =>
      import('./pages/planta/planta.component').then((m) => m.PlantaComponent),
    title: 'Planta',
  },
  {
    path: 'estadisticas6',
    loadComponent: () =>
      import('./pages/estadisticas6/estadisticas6.component').then(
        (m) => m.Estadisticas6Component
      ),
    title: 'Estadisticas',
    resolve: {
      documents: FirebaseJFPResolver,
    },
  },
  // LIDER PCP
  {
    path: '',
    redirectTo: 'ppcp',
    pathMatch: 'full',
  },
  {
    path: 'ppcp',
    loadComponent: () =>
      import('./pages/ppcp/ppcp.component').then((m) => m.PpcpComponent),
    title: 'Ppcp',
  },
  {
    path: 'estadisticas7',
    loadComponent: () =>
      import('./pages/estadisticas7/estadisticas7.component').then(
        (m) => m.Estadisticas7Component
      ),
    title: 'Estadisticas',
    resolve: {
      documents: FirebasePCPResolver,
    },
  },
];
