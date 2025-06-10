import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosPuesto } from '../../../core/types';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-pdf-reporte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pdf-reporte.component.html',
})
export class PdfReporteComponent {
  @Input({ required: true }) datos!: () => DatosPuesto[];

  generatePDF() {
    const datosActuales = this.datos();

    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a3'
    });

    
    doc.setFont('helvetica');
    doc.setFontSize(14);
    doc.text('PAZSTOR - Evaluación Gerencial', 14, 10);
    doc.setFontSize(8);

    // Datos Generales
    const datosGeneralesColumns = [
      'ID', 'Fecha', 'Descripción', 'Número', 'Puesto', 
      'Nivel', 'Área', 'Jefe', 'Supervisa 1',
      'Supervisa 2', 'Supervisa 3', 'Supervisa 4'
    ];

    const datosGeneralesData = datosActuales.map(item => ([
      item.id,
      item.cambios?.fecha || 'N/A', //? encadenamiento opcional
      item.cambios?.descripcion || 'N/A',
      item.cambios?.numero || 'N/A',
      item.generales?.nombre_puesto || 'N/A',
      item.generales?.nivel_puesto?.nivel || 'N/A',
      item.generales?.nivel_puesto?.area || 'N/A',
      item.generales?.puesto_jefe || 'N/A',
      item.generales?.puesto_supervisa1?.puesto1 || 'N/A',
      item.generales?.puesto_supervisa1?.puesto2 || 'N/A',
      item.generales?.puesto_supervisa2?.puesto1 || 'N/A',
      item.generales?.puesto_supervisa2?.puesto2 || 'N/A'
    ]));

    let startY = 15;
    
    doc.text('Datos Generales', 14, startY);
    (doc as any).autoTable({
      startY: startY + 2,
      head: [datosGeneralesColumns],
      body: datosGeneralesData,
      theme: 'grid',
      styles: { fontSize: 7 },
      headStyles: { fillColor: [69, 69, 69] },
      margin: { left: 14, right: 14 },
      rowPageBreak: 'avoid'
    });

    // Perfil
    startY = (doc as any).autoTable.previous.finalY + 5;
    
    const perfilColumns = ['Nivel académico', 'Experiencia', 'Idiomas', 'Licencia'];
    const perfilData = datosActuales.map(item => ([
      item.perfil?.academico || 'N/A',
      item.perfil?.experiencia || 'N/A',
      item.perfil?.idiomas || 'N/A',
      item.perfil?.licencia || 'N/A'
    ]));

    doc.text('Perfil', 14, startY);
    (doc as any).autoTable({
      startY: startY + 2,
      head: [perfilColumns],
      body: perfilData,
      theme: 'grid',
      styles: { fontSize: 7 },
      headStyles: { fillColor: [69, 69, 69] },
      margin: { left: 14, right: 14 },
      rowPageBreak: 'avoid'
    });

    // Competencias Comportamentales
    startY = (doc as any).autoTable.previous.finalY + 5;
    
    const comportamientoColumns = [
      'Comp. 1', 'Valor', 'Comp. 2', 'Valor', 'Comp. 3', 'Valor',
      'Comp. 4', 'Valor', 'Comp. 5', 'Valor', 'Comp. 6', 'Valor'
    ];

    const comportamientoData = datosActuales.map(item => ([
      item.competencias?.comportamiento?.comportamiento1?.name || 'N/A',
      item.competencias?.comportamiento?.comportamiento1?.value || 'N/A',
      item.competencias?.comportamiento?.comportamiento1?.name2 || 'N/A',
      item.competencias?.comportamiento?.comportamiento1?.value2 || 'N/A',
      item.competencias?.comportamiento?.comportamiento2?.name || 'N/A',
      item.competencias?.comportamiento?.comportamiento2?.value || 'N/A',
      item.competencias?.comportamiento?.comportamiento2?.name2 || 'N/A',
      item.competencias?.comportamiento?.comportamiento2?.value2 || 'N/A',
      item.competencias?.comportamiento?.comportamiento3?.name || 'N/A',
      item.competencias?.comportamiento?.comportamiento3?.value || 'N/A',
      item.competencias?.comportamiento?.comportamiento3?.name2 || 'N/A',
      item.competencias?.comportamiento?.comportamiento3?.value2 || 'N/A'
    ]));

    doc.text('Competencias Comportamentales', 14, startY);
    (doc as any).autoTable({
      startY: startY + 2,
      head: [comportamientoColumns],
      body: comportamientoData,
      theme: 'grid',
      styles: { fontSize: 7 },
      headStyles: { fillColor: [69, 69, 69] },
      margin: { left: 14, right: 14 },
      rowPageBreak: 'avoid'
    });

    // Procesos
    startY = (doc as any).autoTable.previous.finalY + 5;
    
    const procesosColumns = [
      'Proc. 1', 'Valor', 'Proc. 2', 'Valor', 'Proc. 3', 'Valor',
      'Proc. 4', 'Valor', 'Proc. 5', 'Valor', 'Proc. 6', 'Valor'
    ];

    const procesosData = datosActuales.map(item => ([
      item.competencias?.proceso?.proceso1?.name || 'N/A',
      item.competencias?.proceso?.proceso1?.value || 'N/A',
      item.competencias?.proceso?.proceso2?.name || 'N/A',
      item.competencias?.proceso?.proceso2?.value || 'N/A',
      item.competencias?.proceso?.proceso3?.name || 'N/A',
      item.competencias?.proceso?.proceso3?.value || 'N/A',
      item.competencias?.proceso?.proceso4?.name || 'N/A',
      item.competencias?.proceso?.proceso4?.value || 'N/A',
      item.competencias?.proceso?.proceso5?.name || 'N/A',
      item.competencias?.proceso?.proceso5?.value || 'N/A',
      item.competencias?.proceso?.proceso6?.name || 'N/A',
      item.competencias?.proceso?.proceso6?.value || 'N/A'
    ]));

    doc.text('Procesos', 14, startY);
    (doc as any).autoTable({
      startY: startY + 2,
      head: [procesosColumns],
      body: procesosData,
      theme: 'grid',
      styles: { fontSize: 7 },
      headStyles: { fillColor: [69, 69, 69] },
      margin: { left: 14, right: 14 },
      rowPageBreak: 'avoid'
    });

    // Control
    startY = (doc as any).autoTable.previous.finalY + 5;
    
    const controlColumns = ['Elaboró', 'Revisó', 'Aprobó'];
    const controlData = datosActuales.map(item => ([
      item.control?.elaboro || 'N/A',
      item.control?.reviso || 'N/A',
      item.control?.aprobo || 'N/A'
    ]));

    doc.text('Control', 14, startY);
    (doc as any).autoTable({
      startY: startY + 2,
      head: [controlColumns],
      body: controlData,
      theme: 'grid',
      styles: { fontSize: 7 },
      headStyles: { fillColor: [69, 69, 69] },
      margin: { left: 14, right: 14 },
      rowPageBreak: 'avoid'
    });

    doc.save('PAZSTOR-Ingeniería.pdf');
  }
}
