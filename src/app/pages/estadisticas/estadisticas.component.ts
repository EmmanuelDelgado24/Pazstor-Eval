import { Component, inject, OnInit, signal } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { LayoutComponent } from '../../shared/layouts/layout/layout.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { map, Observable } from 'rxjs';
import { TablaGraficoComponent } from '../../shared/components/tabla-grafico/tabla-grafico.component';
import { CompetenciaData } from '../../core/types';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [LayoutComponent, RouterOutlet, TablaGraficoComponent],
  templateUrl: './estadisticas.component.html',
})
export class EstadisticasComponent implements OnInit {
  data$!: Observable<CompetenciaData[]>;
  private activeRoute = inject(ActivatedRoute);
  private datos: CompetenciaData[] = [];
  promedios: number[] = new Array(12).fill(null);
  isLoading = signal<boolean>(true);

  ngOnInit(): void {
    initFlowbite();

    this.data$ = this.activeRoute.data.pipe(
      map((data) => data['documents'] as CompetenciaData[])
    );

    this.data$.subscribe((data) => {
      //console.log('Datos recibidos de Firebase:', data);
      this.datos = data;
      console.log('Datos asignados a this.datos:', JSON.stringify(this.datos, null, 2));
      this.utilizarDatos(this.datos);
      this.isLoading.set(false);
    });
  }

  utilizarDatos(datos: CompetenciaData[]): void {
    // Limpiamos el array de promedios
    this.promedios = new Array(12).fill(null);
    //console.log('Datos a procesar:', datos);

    datos.forEach((dato) => {
      // Tomamos la fecha del primer proceso como referencia
      const fechaRef = dato.cambios.fecha;
      //console.log('Fecha encontrada:', fechaRef);
      if (fechaRef) {
        const fecha = new Date(fechaRef); // Ya que viene en formato "YYYY-MM-DD"
        const mes = fecha.getMonth();
        const promedio = this.calcularPromedio(dato.competencias);

        // Solo asignamos si no hay un valor previo para ese mes
        if (this.promedios[mes] === null) {
          this.promedios[mes] = promedio;
        }
      }
    });
  }

  calcularPromedio(competencias: any): number {
    let suma = 0;
    let count = 0;

    // Procesar competencias de proceso
    Object.values(competencias.proceso).forEach((proceso) => {
      const value = parseInt((proceso as any).value);
      if (!isNaN(value)) {
        suma += value;
        count++;
      }
    });

    // Procesar competencias de comportamiento
    Object.values(competencias.comportamiento).forEach((comp) => {
      const value1 = parseInt((comp as any).value);
      const value2 = parseInt((comp as any).value2);

      if (!isNaN(value1)) {
        suma += value1;
        count++;
      }
      if (!isNaN(value2)) {
        suma += value2;
        count++;
      }
    });
    return (suma / 90) * 100;
  }
}
