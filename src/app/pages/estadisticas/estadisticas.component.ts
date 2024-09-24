import { Component, inject, OnInit, signal } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { LayoutComponent } from '../../shared/layouts/layout/layout.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { TablaGraficoComponent } from '../../shared/components/tabla-grafico/tabla-grafico.component';
import { TablaGrafico2Component } from "../../shared/components/tabla-grafico2/tabla-grafico2.component";
import { TablaGrafico3Component } from "../../shared/components/tabla-grafico3/tabla-grafico3.component";
import { TablaGrafico4Component } from "../../shared/components/tabla-grafico4/tabla-grafico4.component";
import { TablaGrafico5Component } from "../../shared/components/tabla-grafico5/tabla-grafico5.component";
import { TablaGrafico6Component } from "../../shared/components/tabla-grafico6/tabla-grafico6.component";
import { TablaGrafico7Component } from "../../shared/components/tabla-grafico7/tabla-grafico7.component";
import { Estadisticas2Component } from '../estadisticas2/estadisticas2.component';
import { Estadisticas3Component } from "../estadisticas3/estadisticas3.component";
import { Estadisticas4Component } from "../estadisticas4/estadisticas4.component";
import { Estadisticas5Component } from "../estadisticas5/estadisticas5.component";
import { Estadisticas7Component } from "../estadisticas7/estadisticas7.component";
import { Estadisticas6Component } from "../estadisticas6/estadisticas6.component";

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [
    LayoutComponent,
    RouterOutlet,
    AsyncPipe,
    JsonPipe,
    TablaGraficoComponent,
    TablaGrafico2Component,
    TablaGrafico3Component,
    TablaGrafico4Component,
    TablaGrafico5Component,
    TablaGrafico6Component,
    TablaGrafico7Component,
    Estadisticas2Component,
    Estadisticas3Component,
    Estadisticas4Component,
    Estadisticas5Component,
    Estadisticas7Component,
    Estadisticas6Component,
],
  templateUrl: './estadisticas.component.html',
})
export class EstadisticasComponent implements OnInit {
  data$!: Observable<any[]>;
  private activeRoute = inject(ActivatedRoute);
  private datos: any[] = [];
  promedios: number[] = [];
  isLoading = signal<boolean>(true);

  ngOnInit(): void {
    initFlowbite();

    this.data$ = this.activeRoute.data.pipe(
      map((data) => data['documents'] as any[])
    );

    this.data$.subscribe((data) => {
      this.datos = data;
      this.utilizarDatos(this.datos);
      this.isLoading.set(false);
    });
  }

  utilizarDatos(datos: any[]): void {
    datos.forEach((dato) => {
      const competencias = dato.competencias;
      const promedio = this.calcularPromedio(competencias);
      this.promedios.push(promedio);
    });
  }

  calcularPromedio(competencias: any): number {
    let suma = 0;
    let count = 0;

    // Recorrer competencias de proceso
    for (const key in competencias.proceso) {
      const competencia = competencias.proceso[key];
      const value = parseInt(competencia.value);
      if (!isNaN(value)) {
        suma += value;
        count++;
      }
    }

    for (const key in competencias.comportamiento) {
      const competencia = competencias.comportamiento[key];
      const value1 = parseInt(competencia.value);
      const value2 = parseInt(competencia.value2);

      if (!isNaN(value1)) {
        suma += value1;
        count++;
      }
      if (!isNaN(value2)) {
        suma += value2;
        count++;
      }
    }

    //return count === 0 ? 0 : suma / count;
    return (suma / 90) * 100;
  }
}
