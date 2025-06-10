// datos.service.ts
import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { DatosPuesto } from '../types';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  private firestore = inject(Firestore);
  private coleccion = 'compras';

  // Obtener todos los puestos
  // Obtener todos los puestos
  async getPuestos(): Promise<DatosPuesto[]> {
    try {
      const colRef = collection(this.firestore, this.coleccion);
      const snapshot = await getDocs(colRef);

      return snapshot.docs
        .filter((doc) => {
          const data = doc.data();
          return doc.exists() && this.isValidPuesto(data);
        })
        .map((doc) => ({ id: doc.id, ...doc.data() } as DatosPuesto));
    } catch (error) {
      console.error('Error al obtener los puestos:', error);
      return [];
    }
  }

  // Función auxiliar para validar un puesto
  private isValidPuesto(data: any): boolean {
    // Verifica si el documento tiene la estructura básica
    return (
      data &&
      data.cambios &&
      data.generales &&
      data.perfil &&
      data.competencias &&
      data.control &&
      // Verifica campos específicos que no deberían ser null
      data.generales.nombre_puesto !== null &&
      data.generales.nivel_puesto !== null
    );
  }

  // Al actualizar, asegúrate de que todos los campos requeridos estén presentes
  async updatePuesto(data: DatosPuesto) {
    try {
      if (!this.isValidPuesto(data)) {
        console.error('Datos incompletos o inválidos');
        return false;
      }

      const docRef = doc(this.firestore, this.coleccion, data.id);
      const dataToUpdate = this.ensureDefaultValues(data);
      await updateDoc(docRef, { ...dataToUpdate });
      return true;
    } catch (error) {
      console.error('Error al actualizar:', error);
      return false;
    }
  }

  // Función para asegurar valores por defecto
  private ensureDefaultValues(data: DatosPuesto): DatosPuesto {
    return {
      ...data,
      id: data.id,
      cambios: {
        fecha: data.cambios?.fecha || 'No disponible',
        descripcion: data.cambios?.descripcion || 'No disponible',
        numero: data.cambios?.numero || 'No disponible',
      },
      generales: {
        nombre_puesto: data.generales?.nombre_puesto || 'Sin asignar',
        nivel_puesto: {
          nivel: data.generales?.nivel_puesto?.nivel || 'Sin asignar',
          area: data.generales?.nivel_puesto?.area || 'Sin asignar',
        },
        puesto_jefe: data.generales?.puesto_jefe || 'Sin asignar',
        puesto_supervisa1: {
          puesto1: data.generales?.puesto_supervisa1?.puesto1 || 'Sin asignar',
          puesto2: data.generales?.puesto_supervisa1?.puesto2 || 'Sin asignar',
        },
        puesto_supervisa2: {
          puesto1: data.generales?.puesto_supervisa2?.puesto1 || 'Sin asignar',
          puesto2: data.generales?.puesto_supervisa2?.puesto2 || 'Sin asignar',
        },
        puesto_supervisa3: {
          puesto1: data.generales?.puesto_supervisa3?.puesto1 || 'Sin asignar',
          puesto2: data.generales?.puesto_supervisa3?.puesto2 || 'Sin asignar',
        },
        puesto_supervisa4: {
          puesto1: data.generales?.puesto_supervisa4?.puesto1 || 'Sin asignar',
          puesto2: data.generales?.puesto_supervisa4?.puesto2 || 'Sin asignar',
        },
      },
      perfil: {
        idiomas: data.perfil?.idiomas || 'No disponible',
        experiencia: data.perfil?.experiencia || 'No disponible',
        academico: data.perfil?.academico || 'No disponible',
        licencia: data.perfil?.licencia || 'No disponible',
      },
      competencias: {
        comportamiento: {
          comportamiento1: {
            name:
              data.competencias?.comportamiento?.comportamiento1?.name ||
              'No disponible',
            name2:
              data.competencias?.comportamiento?.comportamiento1?.name2 ||
              'No disponible',
            value:
              data.competencias?.comportamiento?.comportamiento1?.value ||
              'No disponible',
            value2:
              data.competencias?.comportamiento?.comportamiento1?.value2 ||
              'No disponible',
          },
          comportamiento2: {
            name:
              data.competencias?.comportamiento?.comportamiento2?.name ||
              'No disponible',
            name2:
              data.competencias?.comportamiento?.comportamiento2?.name2 ||
              'No disponible',
            value:
              data.competencias?.comportamiento?.comportamiento2?.value ||
              'No disponible',
            value2:
              data.competencias?.comportamiento?.comportamiento2?.value2 ||
              'No disponible',
          },
          comportamiento3: {
            name:
              data.competencias?.comportamiento?.comportamiento3?.name ||
              'No disponible',
            name2:
              data.competencias?.comportamiento?.comportamiento3?.name2 ||
              'No disponible',
            value:
              data.competencias?.comportamiento?.comportamiento3?.value ||
              'No disponible',
            value2:
              data.competencias?.comportamiento?.comportamiento3?.value2 ||
              'No disponible',
          },
          comportamiento4: {
            name:
              data.competencias?.comportamiento?.comportamiento4?.name ||
              'No disponible',
            name2:
              data.competencias?.comportamiento?.comportamiento4?.name2 ||
              'No disponible',
            value:
              data.competencias?.comportamiento?.comportamiento4?.value ||
              'No disponible',
            value2:
              data.competencias?.comportamiento?.comportamiento4?.value2 ||
              'No disponible',
          },
          comportamiento5: {
            name:
              data.competencias?.comportamiento?.comportamiento5?.name ||
              'No disponible',
            name2:
              data.competencias?.comportamiento?.comportamiento5?.name2 ||
              'No disponible',
            value:
              data.competencias?.comportamiento?.comportamiento5?.value ||
              'No disponible',
            value2:
              data.competencias?.comportamiento?.comportamiento5?.value2 ||
              'No disponible',
          },
          comportamiento6: {
            name:
              data.competencias?.comportamiento?.comportamiento6?.name ||
              'No disponible',
            name2:
              data.competencias?.comportamiento?.comportamiento6?.name2 ||
              'No disponible',
            value:
              data.competencias?.comportamiento?.comportamiento6?.value ||
              'No disponible',
            value2:
              data.competencias?.comportamiento?.comportamiento6?.value2 ||
              'No disponible',
          },
        },
        proceso: {
          proceso1: {
            fecha:
              data.competencias?.proceso?.proceso1?.fecha || 'No disponible',
            name: data.competencias?.proceso?.proceso1?.name || 'No disponible',
            value:
              data.competencias?.proceso?.proceso1?.value || 'No disponible',
          },
          proceso2: {
            fecha:
              data.competencias?.proceso?.proceso2?.fecha || 'No disponible',
            name: data.competencias?.proceso?.proceso2?.name || 'No disponible',
            value:
              data.competencias?.proceso?.proceso2?.value || 'No disponible',
          },
          proceso3: {
            fecha:
              data.competencias?.proceso?.proceso3?.fecha || 'No disponible',
            name: data.competencias?.proceso?.proceso3?.name || 'No disponible',
            value:
              data.competencias?.proceso?.proceso3?.value || 'No disponible',
          },
          proceso4: {
            fecha:
              data.competencias?.proceso?.proceso4?.fecha || 'No disponible',
            name: data.competencias?.proceso?.proceso4?.name || 'No disponible',
            value:
              data.competencias?.proceso?.proceso4?.value || 'No disponible',
          },
          proceso5: {
            fecha:
              data.competencias?.proceso?.proceso5?.fecha || 'No disponible',
            name: data.competencias?.proceso?.proceso5?.name || 'No disponible',
            value:
              data.competencias?.proceso?.proceso5?.value || 'No disponible',
          },
          proceso6: {
            fecha:
              data.competencias?.proceso?.proceso6?.fecha || 'No disponible',
            name: data.competencias?.proceso?.proceso6?.name || 'No disponible',
            value:
              data.competencias?.proceso?.proceso6?.value || 'No disponible',
          },
          proceso7: {
            fecha:
              data.competencias?.proceso?.proceso7?.fecha || 'No disponible',
            name: data.competencias?.proceso?.proceso7?.name || 'No disponible',
            value:
              data.competencias?.proceso?.proceso7?.value || 'No disponible',
          },
          proceso8: {
            fecha:
              data.competencias?.proceso?.proceso8?.fecha || 'No disponible',
            name: data.competencias?.proceso?.proceso8?.name || 'No disponible',
            value:
              data.competencias?.proceso?.proceso8?.value || 'No disponible',
          },
          proceso9: {
            fecha:
              data.competencias?.proceso?.proceso9?.fecha || 'No disponible',
            name: data.competencias?.proceso?.proceso9?.name || 'No disponible',
            value:
              data.competencias?.proceso?.proceso9?.value || 'No disponible',
          },
          proceso10: {
            fecha:
              data.competencias?.proceso?.proceso10?.fecha || 'No disponible',
            name:
              data.competencias?.proceso?.proceso10?.name || 'No disponible',
            value:
              data.competencias?.proceso?.proceso10?.value || 'No disponible',
          },
          proceso11: {
            fecha:
              data.competencias?.proceso?.proceso11?.fecha || 'No disponible',
            name:
              data.competencias?.proceso?.proceso11?.name || 'No disponible',
            value:
              data.competencias?.proceso?.proceso11?.value || 'No disponible',
          },
          proceso12: {
            fecha:
              data.competencias?.proceso?.proceso12?.fecha || 'No disponible',
            name:
              data.competencias?.proceso?.proceso12?.name || 'No disponible',
            value:
              data.competencias?.proceso?.proceso12?.value || 'No disponible',
          },
        },
      },
      control: {
        aprobo: data.control?.aprobo || 'No disponible',
        elaboro: data.control?.elaboro || 'No disponible',
        reviso: data.control?.reviso || 'No disponible',
      },
    };
  }

  async deletePuesto(id: string) {
    const docRef = doc(this.firestore, this.coleccion, id);
    return deleteDoc(docRef);
  }
}
