import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Competencias3TableComponent } from '../competencias3-table/competencias3-table.component';
import { DatosPuesto } from '../../../core/types';
import { DatosService } from '../../../core/services/datos3.services';

@Component({
  selector: 'app-boton3-actualizar',
  standalone: true,
  imports: [CommonModule, Competencias3TableComponent],
  templateUrl: './boton3-actualizar.component.html',
})
export class Boton3ActualizarComponent {
  mostrarTabla = signal(false);
  datosPuestos = signal<DatosPuesto[]>([]);

  constructor(private datosService: DatosService) {
    this.cargarDatos(); // Cargar datos solo una vez al inicio
  }

  async cargarDatos() {
    const datos = await this.datosService.getPuestos();
    this.datosPuestos.set(datos);
  }

  async toggleTabla() {
    const mostrar = !this.mostrarTabla();
    this.mostrarTabla.set(mostrar);

    if (mostrar && this.datosPuestos().length === 0) {
      const datos = await this.datosService.getPuestos();
      this.datosPuestos.set(datos);
    }
  }

  onDatosActualizados(nuevosDatos: DatosPuesto[]) {
    if (nuevosDatos && nuevosDatos.length > 0) {
      this.datosPuestos.set(nuevosDatos);
    }
  }
}
