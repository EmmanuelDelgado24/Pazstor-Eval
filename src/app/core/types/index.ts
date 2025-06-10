import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

/// DATOS ESTATICOS ///

export interface IData {
  id: number;
  name: string;
  values: string[];
}

export interface IData2 {
  id: number;
  name: string;
  values: string[];
}

/// CALIFICAR ///

// Interfaces que reflejan la estructura exacta de Firebase

interface ComportamientoItem {
  name: string;
  name2: string;
  value: string;
  value2: string;
}

interface ProcesoItem {
  fecha: string;
  name: string;
  value: string;
}

interface PuestoSupervisa {
  puesto1: string;
  puesto2: string;
}

interface NivelPuesto {
  nivel: string;
  area: string;
}

interface Cambios {
  fecha: string;
  descripcion: string;
  numero: string;
}

interface Perfil {
  idiomas: string;
  experiencia: string;
  academico: string;
  licencia: string;
}

interface Control {
  aprobo: string;
  elaboro: string;
  reviso: string;
}

interface Comportamiento {
  comportamiento1: ComportamientoItem;
  comportamiento2: ComportamientoItem;
  comportamiento3: ComportamientoItem;
  comportamiento4: ComportamientoItem;
  comportamiento5: ComportamientoItem;
  comportamiento6: ComportamientoItem;
}

interface Proceso {
  proceso1: ProcesoItem;
  proceso2: ProcesoItem;
  proceso3: ProcesoItem;
  proceso4: ProcesoItem;
  proceso5: ProcesoItem;
  proceso6: ProcesoItem;
  proceso7: ProcesoItem;
  proceso8: ProcesoItem;
  proceso9: ProcesoItem;
  proceso10: ProcesoItem;
  proceso11: ProcesoItem;
  proceso12: ProcesoItem;
}

export interface BaseCompetencia {
  id: string;
  cambios: Cambios;
  competencias: {
    comportamiento: Comportamiento;
    proceso: Proceso;
  };
  control: Control;
  generales: {
    nombre_puesto: string;
    nivel_puesto: NivelPuesto;
    puesto_jefe: string;
    puesto_supervisa1: PuestoSupervisa;
    puesto_supervisa2: PuestoSupervisa;
    puesto_supervisa3: PuestoSupervisa;
    puesto_supervisa4: PuestoSupervisa;
  };
  perfil: Perfil;
}

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

export interface DatosPuesto extends BaseCompetencia {
  generales: {
    nombre_puesto: string;
    nivel_puesto: NivelPuesto;
    puesto_jefe: string;
    puesto_supervisa1: PuestoSupervisa;
    puesto_supervisa2: PuestoSupervisa;
    puesto_supervisa3: PuestoSupervisa;
    puesto_supervisa4: PuestoSupervisa;
  };
}

export interface CompetenciaData {
  id: string;
  cambios: {
    descripcion: string;
    fecha: string;
    numero: string;
  };
  competencias: {
    comportamiento: {
      comportamiento1: ComportamientoItem;
      comportamiento2: ComportamientoItem;
      comportamiento3: ComportamientoItem;
      comportamiento4: ComportamientoItem;
      comportamiento5: ComportamientoItem;
      comportamiento6: ComportamientoItem;
    };
    proceso: {
      proceso1: ProcesoItem;
      proceso2: ProcesoItem;
      proceso3: ProcesoItem;
      proceso4: ProcesoItem;
      proceso5: ProcesoItem;
      proceso6: ProcesoItem;
      proceso7: ProcesoItem;
      proceso8: ProcesoItem;
      proceso9: ProcesoItem;
      proceso10: ProcesoItem;
      proceso11: ProcesoItem;
      proceso12: ProcesoItem;
    };
  };
  control: {
    elaboro: string;
    reviso: string;
    aprobo: string;
  };
  generales: {
    generales: {
      nombre_puesto: string;
      nivel_puesto: {
        nivel: string;
        area: string;
      };
      puesto_jefe: string;
      puesto_supervisa: {
        puesto1: string;
        puesto2: string;  
        puesto3: string;
        puesto4: string;
      };
      puesto_supervisa2: {
        puesto1: string;  // Añadido puesto1
        puesto2: string;
      };
      puesto_supervisa3: {
        puesto1: string;
        puesto2: string;  // En lugar de puesto3
      };
      puesto_supervisa4: {
        puesto1: string;
        puesto2: string;  // En lugar de puesto4
      };
    }
  };
  perfil: {
    academico: string;
    experiencia: string;
    idiomas: string;
    licencia: string;
  };
}

/// TABLA CRUD ///
export interface DatosPuesto {
  id: string;
  cambios: {
    fecha: string;
    descripcion: string;
    numero: string;
  };
  generales: {
    nombre_puesto: string;
    nivel_puesto: {
      nivel: string;
      area: string;
    };
    puesto_jefe: string;
    puesto_supervisa1: {
      puesto1: string;
      puesto2: string;
    };
    puesto_supervisa2: {
      puesto1: string;
      puesto2: string;
    };
    puesto_supervisa3: {
      puesto1: string;
      puesto2: string;
    };
    puesto_supervisa4: {
      puesto1: string;
      puesto2: string;
    };
  };
  perfil: {
    idiomas: string;
    experiencia: string;
    academico: string;
    licencia: string;
  };
  competencias: {
    comportamiento: {
      comportamiento1: {
        name: string;
        name2: string;
        value: string;
        value2: string;
      };
      comportamiento2: {
        name: string;
        name2: string;
        value: string;
        value2: string;
      };
      comportamiento3: {
        name: string;
        name2: string;
        value: string;
        value2: string;
      };
      comportamiento4: {
        name: string;
        name2: string;
        value: string;
        value2: string;
      };
      comportamiento5: {
        name: string;
        name2: string;
        value: string;
        value2: string;
      };
      comportamiento6: {
        name: string;
        name2: string;
        value: string;
        value2: string;
      };
    };
    proceso: {
      proceso1:{
        fecha: string;
        name: string;
        value: string;
      },
      proceso2:{
        fecha: string;
        name: string;
        value: string;
      },
      proceso3:{
        fecha: string;
        name: string;
        value: string;
      },
      proceso4:{
        fecha: string;
        name: string;
        value: string;
      },
      proceso5:{
        fecha: string;
        name: string;
        value: string;
      },
      proceso6:{
        fecha: string;
        name: string;
        value: string;
      },
      proceso7:{
        fecha: string;
        name: string;
        value: string;
      },
      proceso8:{
        fecha: string;
        name: string;
        value: string;
      },
      proceso9:{
        fecha: string;
        name: string;
        value: string;
      },
      proceso10:{
        fecha: string;
        name: string;
        value: string;
      },
      proceso11:{
        fecha: string;
        name: string;
        value: string;
      },
      proceso12:{
        fecha: string;
        name: string;
        value: string;
      },
    };
  };
  control: {
    aprobo: string;
    elaboro: string;
    reviso: string;
  };
}

/// AUTENTICACIÓN ///

export interface LoginForm {
  email: string;
  password: string;
}

/// GRÁFICA ///

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
};



export interface ICompetencias {}
export interface DatosPuesto {}
