import {IData, IData2 } from '../core/types/index';

///////  GERENTE DE INGENIERÍA /////// 

const Puesto: IData = {
  id: 1,
  name: 'Puesto',
  values: [
    'CHIEF EXECUTIVE OFFICER - CEO',
    'CHIEF OPERANTING OFFICER - COO',
    'CHIEF FINANCIAL OFFICE - CFO',
    'BUSSINES MANAGER',
    'SHOE FACTORY MANAGER',
    'LÍDER DESARROLLO TÉCNICO',
    'LÍDER MODELADO Y PATRONAJE',
    'LÍDER CECOM',
    'LÍDER CEDIS',
    'LÍDER INGENIERÍA',
    'LÍDER PRODUCCIÓN',
    'LÍDER RECURSOS HUMANOS',
    'LÍDER CALIDAD',
    'LÍDER HARDWARE Y SEGURIDAD PATRIMONIAL',
    'EJECUTIVO DE CLIENTE COPPEL-ANDREA',
    'EJECUTIVO DE CLIENTE VARIOS',
    'EJECUTIVO DE CLIENTE STEVE MADDEN',
    'COORD. MODELISTAS',
    'MODELISTA',
    'COORD. MODELISTAS',
    'MODELISTA',
    'COOR. COSTOS Y ESPECIFIACIONES DE PRODUCCIÓN',
    'COOR. DISEÑO CONCEPTUAL',
    'COOR. DE MONTADO',
    'DISEÑADORA',
    'SUP. DE ALMACEN',
    'SUP. CEDIS',
    'ING. IMPLEMENTACIÓN Y PROCESOS',
    'ING. PROGRAMACIÓN Y NOMINA',
    'ING DE PROCESOS',
    'MECANICO',
    'SUPERVISOR DE CORTE-COORDINADO',
    'SUPERVISOR DE PESPUNTE',
    'SUP. KANBAN',
    'SUPERVISOR DE AVIOS',
    'SUPERVISOR DE MONTADO-ADORNO',
    'DOCTOR',
    'PRACTICANTE',
    'AUXILIAR DE DESARROLLO DE MATERIALES',
    'AUXILIAR FABRICACIÓN MUESTRAS',
    'AUX.CARDEX CECOM',
    'CHOFER CEDIS',
    'AUX. EMBARQUE CEDIS',
    'TÉCNICO IMPLEMENTADOR',
    'AUXILIAR DE RH',
    'AUX. DE PESPUNTE',
    'AUXILIAR DE KANBAN',
    'AUXILIAR EMBARQUE FABRICA',
    'AUX RH',
    'RECEPCIONISTA FABRICA',
    'VIGILANTE',
    'INSPECTOR DE CALIDAD',
    'OP. EMBARQUE CEDIS',
    'OP. MUESTRAS',
    'OP. CECOM',
    'CHOFER',
    'OP. ASEO',
    'OP. COMODÍN',
  ],
};

const Jerarquia: IData = {
  id: 1,
  name: 'Jerarquia',
  values: [
    'CHIEF EXECUTIVE OFFICER - CEO',
    'CHIEF EXECUTIVO OPERATING - COO',
    'MANAGER',
    'LIDER',
    'COORDINADOR',
    'SUP/TEC/EXPERTO',
    'AUXILIAR',
    'OPERATIVO',
  ],
};

const Area: IData = {
  id: 1,
  name: 'Proceso',
  values: ['Área', 'Departamento', 'Sector', 'Proceso'],
};

const Academico: IData = {
  id: 4,
  name: 'Nivel académico',
  values: [
    'Maestría',
    'Licenciatura/Ingeniería',
    'TSU',
    'Preparatoria/ Técnico',
    'Secundaria',
    'Preferentemente Primaria',
  ],
};

const Idiomas: IData = {
  id: 4,
  name: 'Idiomas extranjeros',
  values: [
    'Inglés fluente',
    'Ingles conversación',
    'Mandarín',
    'Italiano',
    'Alemán',
    'Francés',
  ],
};

const Experiencia: IData = {
  id: 4,
  name: 'Experiencia',
  values: [
    'Más de 5 años',
    '2 a 5 años',
    '1 a 2 años',
    '6 meses a 1 año',
    'Hasta 6 meses',
    'Sin experiencia',
  ],
};

const Licencia: IData = {
  id: 4,
  name: 'Licencia de manejo',
  values: ['No aplica', 'Tipo A', 'Tipo B', 'Tipo C'],
};

const Competencias: IData = {
  id: 5,
  name: 'Competencias específicas del proceso',
  values: [
    'Administracion de proyectos',
    'Auditoria en los procesos de fabricación',
    'Cálculo de consumos de los materiales directos e indirectos',
    'Cálculo de cotso de la materia prima',
    'Administracion de proyectos PDP',
    'Cálculo de cotso de la mano de obra,',
    'Control de producto no conforme',
    'Diseño en Auto Cad',
    'Eliminación de los 7 desperdicios de la manufactura',
    'Los materiales para la fabricación de los productos',
    'Planeación, programación y control de la producción',
    'Pruebas físicas de los materiales utilizados en la fabricación del calzado',
    'Salud y seguridad en el trabajo',
    'Sistema de gestión de la calidad',
    'Implementación de nuevos productos en la producción',
    'Lay out - proyectos de distribución física en la planta',
    'Estudio del Trabajo - tiempos y movimientos',
    'Lean Manufacturing',
    'Impartir capacitación a los trabajadores en los procesos de fabricación',
    'Lean Manufacturing',
    'AMEF - Análisis de Modo y Efecto de Falla',
    'MASP - Metodología para Análisis y Solución de Problemas',
    'El trabajo estándar - Instrucción de trabajo (POE´s)',
    'Balanceo de líneas de producción',
  ],
};

const Comportamientos: IData = {
  id: 5,
  name: 'Competencias Comportamentales',
  values: [
    'Lograr resultados',
    'Orientación al cliente externo/interno',
    'Iniciativa e innovación',
    'Trabajo en equipo',
    'Comunicación',
    'Liderazgo',
    'Agilidad',
    'Administracion del tiempo',
    'Capacidad de analisis',
    'Capacidad de cumplir normas y procediminetos',
    'Comunicacion interpersonal',
    'Creatividad',
    'Disciplina',
    'Enfoque en resultados',
    'Flexibilidad e innovacion',
    'Liderazgo participativo',
    'Organizacion y planeacion',
    'Persistencia y determinacion',
    'Proactividad',
    'Solucion de Problemas',
    'Toma de deciciones',
    'Vision sistemica',
  ],
};

const Calificaciones: IData2 = {
  id: 5,
  name: 'Calificaciones',
  values: ['1', '3', '5'],
};


///////  PRODUCCIÓN /////// 

const Competencias2: IData2 = { 
  id: 5,
  name: 'Competencias específicas del proceso',
  values: [
    'Administracion de proyectos',
    'Auditoria en los procesos de fabricación',
    'Cálculo de consumos de los materiales directos e indirectos',
    'Cálculo de cotso de la materia prima',
    'Administracion de proyectos PDP',
    'Cálculo de cotso de la mano de obra,',
    'Control de producto no conforme',
    'Diseño en Auto Cad',
    'Eliminación de los 7 desperdicios de la manufactura',
    'Los materiales para la fabricación de los productos',
    'Planeación, programación y control de la producción',
    'Pruebas físicas de los materiales utilizados en la fabricación del calzado',
    'Salud y seguridad en el trabajo',
    'Sistema de gestión de la calidad',
    'Implementación de nuevos productos en la producción',
    'Lay out - proyectos de distribución física en la planta',
    'Estudio del Trabajo - tiempos y movimientos',
    'Lean Manufacturing',
    'Impartir capacitación a los trabajadores en los procesos de fabricación',
    'AMEF - Análisis de Modo y Efecto de Falla',
    'MASP - Metodología para Análisis y Solución de Problemas',
    'El trabajo estándar - Instrucción de trabajo (POE´s)',
    'Balanceo de líneas de producción',
  ],
}

///////  COMPRAS /////// 

const Competencias3: IData2 = { 
  id: 5,
  name: 'Competencias específicas del proceso',
  values: [
    'Manuales y procedimientos del proceso',
    'Conocimiento de los procedimientos fiscales en el entorno cadena de suministro',
    'Sistema de gestión de la calidad',
    'Los materiales para la fabricación de los productos',
    'Pruebas físicas de los materiales utilizados en la fabricación del calzado',
    'Manejo de productos peligrosos',
    'Cálculo de consumos de los materiales directos e indirectos',
    'Habilidad en el manejo de ERP',
    'Planeación, programación y control de la producción',
    'Conocimiento de la proveeduría del seguimiento cuero calzado',
    'Habilidad para negociación con proveedores',
    'Administracion de inventarios de MP',
    'Eliminación de los 7 desperdicios de la manufactura',
    'Tramites contables, facturas, notas de crédito',
    'Manejo de software ERPLatino',
    'Normativa fiscal para compra, transporte, almacenamiento y consumo de materias primas',
  ],
}

///////  CALIDAD /////// 

const Competencias4: IData2 = { 
  id: 5,
  name: 'Competencias específicas del proceso',
  values: [
    'Inspección y liberación de productos',
    'Control de producto no conforme',
    'Manuales y procedimientos del proceso',
    'Salud y seguridad en el trabajo',
    'Estadística y resultados de la calidad',
    'Sistema de gestión de la calidad',
    'Escribir procedimientos documentados',
    'Elaborar instrucciones de trabajo',
    'Pruebas de calces, valoración y acciones de corrección',
    'Pruebas de despegado, interpretación y acciones de corrección',
    'Acciones de corrección en producto y procesos',
    'AUDITORIA EN LOS PROCESOS DE FABRICACIÓN',
    'Los materiales para la fabricación de los productos',
    'Pruebas físicas de los materiales utilizados en la fabricación del calzado',
    'MASP - Metodología para Análisis y Solución de Problemas',
    'Impartir capacitación a los trabajadores en los procesos de fabricación',
  ],
}

/////// DOH /////// 

const Competencias5: IData2 = { 
  id: 5,
  name: 'Competencias específicas del proceso',
  values: [
   'Conocimiento de la ley federal del trabajo',
   'Habilidad para interactuar con los colaboradores',
   'Conocimientos para elaborar, aplicar y obtener el estudio del clima laboral',
   'Calculos de aguinaldos, finiquitos, vacaciones, etc',
   'Habilidad para elaborar, aprobar e implementar planes de capacitación',
   'Conocimiento de la normatividades STPS',
   'Conocimientos para estructurar y organizar los comites, sean de seguridad, combate a incendios, entre otros',
   'Habilidad para organizar y llevar a cabo los simulacros y entretenimientos conforme se requiere la STPS',
   'Capacidad de proponer, aprobar y cumplir presupuestos',
   'Habilidad para resolución de conflictos, sean de orden personal o mismos del ambiente laboral',
   'Conocimiento de las fuentes para reclutamiento',
   'Capacidad para generar programas de retención de los colaboradores',
   'Elaborar, aprobar e implementar un plan para desarrollo del personal',
   'Hacer evaluacion de las competencias y desempeño del personal',
  ],
}


export {
  Puesto,
  Jerarquia,
  Area,
  Academico,
  Idiomas,
  Experiencia,
  Licencia,
  Competencias,
  Competencias2,
  Competencias3,
  Competencias4,
  Competencias5,
  Comportamientos,
  Calificaciones,
};
