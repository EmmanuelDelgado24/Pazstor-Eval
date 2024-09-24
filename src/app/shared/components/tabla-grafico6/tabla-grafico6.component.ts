import { Component, Input, OnInit } from '@angular/core';
import {
  NgApexchartsModule,
  type ApexAxisChartSeries,
  ApexPlotOptions,
} from 'ng-apexcharts';
import { ChartOptions } from '../../../core/types';
import { TablaControlCambiosComponent } from '../tabla-control-cambios/tabla-control-cambios.component';

@Component({
  selector: 'app-tabla-grafico6',
  standalone: true,
  imports: [NgApexchartsModule, TablaControlCambiosComponent],
  templateUrl: './tabla-grafico6.component.html',
  styles: ``,
})
export class TablaGrafico6Component implements OnInit {
  @Input() data: number[] = [];
  chartOptions: ChartOptions;

  getCharts(data: number[]): ApexAxisChartSeries {
    const calificaciones = {
      Bueno: { name: 'Bueno', data: [0], color: '' },
      Regular: { name: 'Regular', data: [0], color: '' },
      Malo: { name: 'Malo', data: [0], color: '' },
    };

    data.forEach((value) => {
      const valueInteger = Math.floor(value);
      if (valueInteger >= 95) {
        calificaciones.Bueno.data.push(valueInteger);
        calificaciones.Bueno.color = '#06D001';
      } else if (valueInteger >= 90) {
        calificaciones.Regular.data.push(valueInteger);
        calificaciones.Regular.color = '#F9E400';
      } else if (valueInteger <= 85) {
        calificaciones.Malo.data.push(valueInteger);
        calificaciones.Malo.color = '#FF0000';
      }
    });

    return Object.values(calificaciones).map((value) => ({
      name: value.name,
      data: value.data,
      color: value.color,
    }));
  }

  ngOnInit(): void {
    if (this.data.length > 0) {
      this.chartOptions.series = this.getCharts(this.data);
    } else {
      this.chartOptions.series[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
  }

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: '2024',
          data: [],
        },
      ],
      chart: {
        height: 450,
        type: 'area',
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      title: {
        text: 'Calificación',
      },
      xaxis: {
        categories: [
          // 'Ene',
          // 'Feb',
          // 'Mar',
          // 'Abr',
          // 'May',
          // 'Jun',
          'Jul',
          'Ago',
          'Sep',
          'Oct',
          'Nov',
          'Dic',
        ],
        title: {
          text: 'Indicadores',
        },
      },
    };
  }
}
