import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexPlotOptions,
} from 'ng-apexcharts';

export interface IData {
  id: number;
  name: string;
  values: string[];
  fecha?: string;
}

export interface IData2 {
  id: number;
  name: string;
  values: string[];
}

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
};

export interface IGenerales {
  puesto: string;
  area: string;
  nivel: string;
  puesto_jefe: string;
  puestos_supervisa: {
    puesto1: string;
    puesto2: string;
    puesto3: string;
    puesto4: string;
  };
}

export interface ICompetencias {}
