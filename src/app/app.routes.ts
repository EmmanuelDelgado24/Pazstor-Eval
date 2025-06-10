import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { 
  FirebaseIngenieriaResolver, 
  FirebaseProduccionResolver, 
  FirebaseComprasResolver, 
  FirebaseCalidadResolver, 
  FirebaseDohResolver, 
  FirebaseJFPResolver, 
  FirebasePCPResolver 
} from './core/resolvers/firebase.service';

export const routes: Routes = [
  // Rutas públicas
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./shared/components/login/login.component')
      .then(m => m.LoginComponent),
    title: 'Login'
  },

  // Rutas protegidas
  {
    path: '',
    canActivate: [authGuard],
    children: [

      // RUTA INGENIERÍA
      {
        path: 'ingenieria',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/home/home.component')
              .then(m => m.HomeComponent),
            title: 'Ingenieria'
          },
        ]
      },
      // RUTA ESTADISTICA INGENIERÍA
      {
        path: 'estadisticas',
        children:[
          {
            path: '',
            loadComponent: () => import('./pages/estadisticas/estadisticas.component')
              .then(m => m.EstadisticasComponent),
            title: 'Estadisticas',
          resolve: { documents: FirebaseIngenieriaResolver }
         },
       ]
      },
  
      // RUTA PRODUCCIÓN
      {
        path: 'produccion',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/produccion/produccion.component')
              .then(m => m.ProduccionComponent),
            title: 'Produccion'
          },
        ]
      },
      // RUTA ESTADISTICA PRODUCCIÓN
      {
        path: 'estadisticas2',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/estadisticas2/estadisticas2.component')
              .then(m => m.Estadisticas2Component),
            title: 'Estadisticas',
            resolve: { documents: FirebaseProduccionResolver }
          }
        ]
      },

      // RUTA COMPRAS
      {
        path: 'compras',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/compras/compras.component')
              .then(m => m.ComprasComponent),
            title: 'Compras'
          },
        ]
      },
      // RUTA ESTADISTICA COMRAS
      {
        path: 'estadisticas3',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/estadisticas3/estadisticas3.component')
              .then(m => m.Estadisticas3Component),
            title: 'Estadisticas',
            resolve: { documents: FirebaseComprasResolver }
          },
        ]
      },

      // RUTA CALIDAD
      {
        path: 'calidad',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/calidad/calidad.component')
              .then(m => m.CalidadComponent),
            title: 'Calidad'
          },
        ]
      },
      // RUTA ESTADISTICA CALIDAD
      {
        path: 'estadisticas4',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/estadisticas4/estadisticas4.component')
              .then(m => m.Estadisticas4Component),
            title: 'Estadisticas',
            resolve: { documents: FirebaseCalidadResolver }
          },
        ]
      },

      // RUTA DOH
      {
        path: 'doh',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/doh/doh.component')
              .then(m => m.DohComponent),
            title: 'Doh'
          },
        ]
      },
      // RUTA ESTADISTICA DOH
      {
        path: 'estadisticas5',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/estadisticas5/estadisticas5.component')
              .then(m => m.Estadisticas5Component),
            title: 'Estadisticas',
            resolve: { documents: FirebaseDohResolver }
          },
        ]
      },

      // RUTA JEFE DE PLANTA
      {
        path: 'planta',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/planta/planta.component')
              .then(m => m.PlantaComponent),
            title: 'Planta'
          },
        ]
      },
      // RUTA ESTADISTICAS JEFE DE PLANTA
      {
        path: 'estadisticas6',
        children:[
          {
            path: '',
            loadComponent: () => import('./pages/estadisticas6/estadisticas6.component')
              .then(m => m.Estadisticas6Component),
            title: 'Estadisticas',
            resolve: { documents: FirebaseJFPResolver }
          },
        ]
      },

      // RUTA LIDER PCP
      {
        path: 'ppcp',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/ppcp/ppcp.component')
              .then(m => m.PpcpComponent),
            title: 'Ppcp'
          },
        ]
      },
      // RUTA ESTADISTICA LIDER PCP
      {
        path: 'estadisticas7',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/estadisticas7/estadisticas7.component')
              .then(m => m.Estadisticas7Component),
            title: 'Estadisticas',
            resolve: { documents: FirebasePCPResolver }
          },
        ]
      },
    ]
  },

  // Ruta para manejar rutas no encontradas
  {
    path: '**',
    redirectTo: 'login'
  }
];