import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatosPuesto } from '../../../core/types';
import { DatosService } from '../../../core/services/datos4.services';
import {
  Puesto,
  Jerarquia,
  Area,
  Academico,
  Idiomas,
  Experiencia,
  Licencia,
  Competencias,
  Comportamientos,
  Calificaciones,
} from '../../../utils/data';
import { PdfReporteComponent } from '../pdf-reporte/pdf-reporte.component';

@Component({
  selector: 'app-competencias4-table',
  standalone: true,
  imports: [CommonModule, FormsModule, PdfReporteComponent],
  templateUrl: './competencias4-table.component.html',
})
export class Competencias4TableComponent {
  // tabla-crud.component.ts
  datos = input.required<DatosPuesto[]>();
  datosActualizados = output<DatosPuesto[]>();
  puesto = Puesto;
  jerarquia = Jerarquia;
  area = Area;
  academico = Academico;
  idiomas = Idiomas;
  experiencia = Experiencia;
  licencia = Licencia;
  competencias = Competencias;
  comportamientos = Comportamientos;
  calificaciones = Calificaciones;

  // Signals para el estado
  showModal = signal(false);
  editingItem = signal<DatosPuesto | null>(null);
  formData = signal<DatosPuesto>({
    id: '',
    cambios: {
      fecha: '',
      descripcion: '',
      numero: '',
    },
    competencias: {
      comportamiento: {
        comportamiento1: { name: '', name2: '', value: '', value2: '' },
        comportamiento2: { name: '', name2: '', value: '', value2: '' },
        comportamiento3: { name: '', name2: '', value: '', value2: '' },
        comportamiento4: { name: '', name2: '', value: '', value2: '' },
        comportamiento5: { name: '', name2: '', value: '', value2: '' },
        comportamiento6: { name: '', name2: '', value: '', value2: '' },
      },
      proceso: {
        proceso1: { fecha: '', name: '', value: '' },
        proceso2: { fecha: '', name: '', value: '' },
        proceso3: { fecha: '', name: '', value: '' },
        proceso4: { fecha: '', name: '', value: '' },
        proceso5: { fecha: '', name: '', value: '' },
        proceso6: { fecha: '', name: '', value: '' },
        proceso7: { fecha: '', name: '', value: '' },
        proceso8: { fecha: '', name: '', value: '' },
        proceso9: { fecha: '', name: '', value: '' },
        proceso10: { fecha: '', name: '', value: '' },
        proceso11: { fecha: '', name: '', value: '' },
        proceso12: { fecha: '', name: '', value: '' },
      },
    },
    control: {
      aprobo: '',
      elaboro: '',
      reviso: '',
    },
    generales: {
      nombre_puesto: '',
      nivel_puesto: { nivel: '', area: '' },
      puesto_jefe: '',
      puesto_supervisa1: {
        puesto1: '',
        puesto2: '',
      },
      puesto_supervisa2: {
        puesto1: '',
        puesto2: '',
      },
      puesto_supervisa3: {
        puesto1: '',
        puesto2: '',
      },
      puesto_supervisa4: {
        puesto1: '',
        puesto2: '',
      },
    },
    perfil: {
      idiomas: '',
      experiencia: '',
      academico: '',
      licencia: '',
    },
  } as DatosPuesto);

  loading = signal(false);
  error = signal<string | null>(null);

  constructor(private datosService: DatosService) {}

  updateFormField(path: string, value: any) {
    const currentData = { ...this.formData() };

    // Divide el path en partes
    const parts = path.split('.');

    // Usar tipo Record para permitir índices de string
    let target: Record<string, any> = currentData;

    // Recorre todas las partes excepto la última
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      // Si la propiedad no existe, créala como objeto vacío
      if (!target[part]) {
        target[part] = {};
      }
      target = target[part] as Record<string, any>;
    }

    // Asigna el valor a la última propiedad
    const lastPart = parts[parts.length - 1];
    target[lastPart] = value;

    // Actualiza el formData con los nuevos valores
    this.formData.set(currentData);
  }

  editItem(item: DatosPuesto) {
    this.editingItem.set(item);
    this.formData.set({
      ...item,
      cambios: {
        ...item.cambios,
      },
      generales: {
        ...item.generales,
        nivel_puesto: {
          ...item.generales?.nivel_puesto,
        },
        puesto_supervisa1: {
          ...item.generales?.puesto_supervisa1,
          ...item.generales?.puesto_supervisa2,
          ...item.generales?.puesto_supervisa3,
          ...item.generales?.puesto_supervisa4,
        },
        puesto_supervisa2: {
          ...item.generales?.puesto_supervisa1,
          ...item.generales?.puesto_supervisa2,
          ...item.generales?.puesto_supervisa3,
          ...item.generales?.puesto_supervisa4,
        },
        puesto_supervisa3: {
          ...item.generales?.puesto_supervisa1,
          ...item.generales?.puesto_supervisa2,
          ...item.generales?.puesto_supervisa3,
          ...item.generales?.puesto_supervisa4,
        },
        puesto_supervisa4: {
          ...item.generales?.puesto_supervisa1,
          ...item.generales?.puesto_supervisa2,
          ...item.generales?.puesto_supervisa3,
          ...item.generales?.puesto_supervisa4,
        },
      },
      perfil: {
        ...item.perfil,
      },
      competencias: {
        comportamiento: {
          comportamiento1: {
            ...item.competencias?.comportamiento?.comportamiento1,
          },
          comportamiento2: {
            ...item.competencias?.comportamiento?.comportamiento2,
          },
          comportamiento3: {
            ...item.competencias?.comportamiento?.comportamiento3,
          },
          comportamiento4: {
            ...item.competencias?.comportamiento?.comportamiento4,
          },
          comportamiento5: {
            ...item.competencias?.comportamiento?.comportamiento5,
          },
          comportamiento6: {
            ...item.competencias?.comportamiento?.comportamiento6,
          },
        },
        proceso: {
          proceso1: { ...item.competencias?.proceso?.proceso1 },
          proceso2: { ...item.competencias?.proceso?.proceso2 },
          proceso3: { ...item.competencias?.proceso?.proceso3 },
          proceso4: { ...item.competencias?.proceso?.proceso4 },
          proceso5: { ...item.competencias?.proceso?.proceso5 },
          proceso6: { ...item.competencias?.proceso?.proceso6 },
          proceso7: { ...item.competencias?.proceso?.proceso7 },
          proceso8: { ...item.competencias?.proceso?.proceso8 },
          proceso9: { ...item.competencias?.proceso?.proceso9 },
          proceso10: { ...item.competencias?.proceso?.proceso10 },
          proceso11: { ...item.competencias?.proceso?.proceso11 },
          proceso12: { ...item.competencias?.proceso?.proceso12 },
        },
      },
      control: {
        ...item.control,
      },
    });
    this.showModal.set(true);
  }

  async onEliminarRegistro(item: DatosPuesto) {
    try {
      // Eliminar el registro de Firebase
      await this.datosService.deletePuesto(item.id);

      // Obtener los datos actualizados de Firebase
      const nuevosData = await this.datosService.getPuestos();

      // Emitir los datos actualizados para actualizar la tabla
      this.datosActualizados.emit(nuevosData);

      console.log('Registro eliminado correctamente');
    } catch (error) {
      console.error('Error al eliminar el registro:', error);
    }
  }

  closeModal() {
    this.showModal.set(false);
    this.editingItem.set(null);
  }

  async saveItem(event: Event) {
    event.preventDefault();
    const confirmacion = confirm('¿Deseas guardar este registro?');
    if (!confirmacion) return; // Salir si el usuario no confirma

    try {
      const data = this.formData();
      if (!data.id) {
        console.error('No se puede guardar sin ID');
        return;
      }

      const result = await this.datosService.updatePuesto(data); // Envía datos a Firebase solo si se confirma
      if (result) {
        await this.refreshData();
        this.closeModal();
      }
    } catch (error) {
      console.error('Error al guardar:', error);
    }
  }

  // Y modificar el refreshData así:
  async refreshData() {
    const confirmacion = confirm('¿Deseas actualizar los datos?');
    if (!confirmacion) return; // Salir si no se confirma

    try {
      this.loading.set(true);
      this.error.set(null);
      const nuevosData = await this.datosService.getPuestos();
      if (nuevosData && nuevosData.length > 0) {
        console.log('Datos actualizados:', nuevosData);
        this.datosActualizados.emit(nuevosData);
      }
    } catch (error) {
      console.error('Error al cargar datos:', error);
      this.error.set('Error al cargar los datos');
    } finally {
      this.loading.set(false);
    }
  }

  getProcesos(
    selectedItem: DatosPuesto
  ): Array<{ key: string; name: string; value: string }> {
    if (!selectedItem?.competencias?.proceso) return [];

    return Object.entries(selectedItem.competencias.proceso).map(
      ([key, value]) => ({
        key,
        name: value.name || '',
        value: value.value || '',
      })
    );
  }
}
