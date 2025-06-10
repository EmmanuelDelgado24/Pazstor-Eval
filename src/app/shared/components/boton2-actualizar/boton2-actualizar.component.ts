import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Competencias2TableComponent } from '../competencias2-table/competencias2-table.component';
import { DatosPuesto } from '../../../core/types';
import { DatosService } from '../../../core/services/datos2.services';

@Component({
  selector: 'app-boton2-actualizar',
  standalone: true,
  imports: [CommonModule, Competencias2TableComponent],
  templateUrl: './boton2-actualizar.component.html',
})
export class Boton2ActualizarComponent {
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
