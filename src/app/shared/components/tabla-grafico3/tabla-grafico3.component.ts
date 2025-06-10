import { Component, Input, OnInit } from '@angular/core';
import {
  NgApexchartsModule,
  type ApexAxisChartSeries,
  ApexPlotOptions,
} from 'ng-apexcharts';
import { ChartOptions } from '../../../core/types';

@Component({
  selector: 'app-tabla-grafico3',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './tabla-grafico3.component.html',
  styles: ``,
})
export class TablaGrafico3Component implements OnInit {
  @Input() data: number[] = [];
  chartOptions: ChartOptions;

  getCharts(data: number[]): ApexAxisChartSeries {
    // Inicializamos los arrays con 12 ceros (uno por mes)
    const calificaciones = {
      Bueno: { name: 'Bueno', data: new Array(12).fill(null), color: '#06D001' },
      Regular: { name: 'Regular', data: new Array(12).fill(null), color: '#F9E400' },
      Malo: { name: 'Malo', data: new Array(12).fill(null), color: '#FF0000' },
    };

    // Procesamos cada valor en su posición correspondiente del mes
    data.forEach((value, index) => {
      const valueInteger = Math.floor(value);
      
      // Solo procesamos si el índice está dentro del rango de meses (0-11)
      if (index < 12) {
        if (valueInteger >= 95) {
          calificaciones.Bueno.data[index] = valueInteger;
          calificaciones.Regular.data[index] = null;
          calificaciones.Malo.data[index] = null;
        } else if (valueInteger >= 90) {
          calificaciones.Bueno.data[index] = null;
          calificaciones.Regular.data[index] = valueInteger;
          calificaciones.Malo.data[index] = null;
        } else {
          calificaciones.Bueno.data[index] = null;
          calificaciones.Regular.data[index] = null;
          calificaciones.Malo.data[index] = valueInteger;
        }
      }
    });

    return Object.values(calificaciones);
  }

  ngOnInit(): void {
    if (this.data.length > 0) {
      this.chartOptions.series = this.getCharts(this.data);
    } else {
      this.chartOptions.series = [{
        name: 'Sin datos',
        data: [],
        color: '#cccccc'
      }];
    }
  }

  constructor() {
    this.chartOptions = {
      series: [],
      chart: {
        height: 450,
        type: 'bar',
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          dataLabels: {
            position: 'top',
          },
        },
      },
      title: {
        text: 'Calificación',
        align: 'center',
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
        },
      },
      xaxis: {
        categories: [
          'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
          'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
        ],
        title: {
          text: 'Meses',
          style: {
            fontSize: '14px',
            fontWeight: 'normal',
          },
        },
        labels: {
          style: {
            fontSize: '12px',
          },
        },
      },
      yaxis: {
        max: 100,
        title: {
          text: 'Porcentaje',
          style: {
            fontSize: '14px',
            fontWeight: 'normal',
          },
        },
      },
    };
  }
}
