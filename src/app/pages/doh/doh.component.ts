import {
  Component,
  inject,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { LayoutComponent } from '../../shared/layouts/layout/layout.component';
import { TableGenerales5Component } from '../../shared/components/table-generales5/table-generales5.component';
import { TableMision5Component } from '../../shared/components/table-mision5/table-mision5.component';
import { TableResponsabilidades5Component } from '../../shared/components/table-responsabilidades5/table-responsabilidades5.component';
import { TablePerfilComponent } from '../../shared/components/table-perfil/table-perfil.component';
import { TableCompetencias5Component } from '../../shared/components/table-competencias5/table-competencias5.component';
import { TablaAutoridades5Component } from '../../shared/components/tabla-autoridades5/tabla-autoridades5.component';
import { TablaControlDocumentoComponent } from '../../shared/components/tabla-control-documento/tabla-control-documento.component';
import { TablaControlCambiosComponent } from '../../shared/components/tabla-control-cambios/tabla-control-cambios.component';
import { initFlowbite } from 'flowbite';
import { FirebaseService } from '../../core/services/firebase.service';
import { ToastSuccesfullComponent } from '../../shared/components/ui/toast-succesfull/toast-succesfull.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BotonCompetenciasComponent } from "../../shared/components/boton-actualizar/boton-actualizar.component";
import { Boton5ActualizarComponent } from "../../shared/components/boton5-actualizar/boton5-actualizar.component";

@Component({
  selector: 'app-doh',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent, FooterComponent, ReactiveFormsModule,
    ToastSuccesfullComponent, TableGenerales5Component, TableMision5Component,
    TableResponsabilidades5Component, TablePerfilComponent, TableCompetencias5Component,
    TablaAutoridades5Component, TablaControlDocumentoComponent, TablaControlCambiosComponent, BotonCompetenciasComponent, Boton5ActualizarComponent],
  templateUrl: './doh.component.html',
  styles: ``
})
export class DohComponent {
  firebaseService = inject(FirebaseService);
  form: FormGroup;
  exito: WritableSignal<boolean>;
  generalesForm: FormGroup;
  perfilForm: FormGroup;
  competenciasForm: FormGroup;
  controlForm: FormGroup;
  cambiosForm: FormGroup;

  constructor() {
    this.exito = signal<boolean>(false);

    this.competenciasForm = new FormGroup({
      proceso: new FormGroup({
        proceso1: new FormGroup({
          name: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
          fecha: new FormControl('', Validators.required),
        }),
        proceso2: new FormGroup({
          name: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
          fecha: new FormControl('', Validators.required),
        }),
        proceso3: new FormGroup({
          name: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
          fecha: new FormControl('', Validators.required),
        }),
        proceso4: new FormGroup({
          name: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
          fecha: new FormControl('', Validators.required),
        }),
        proceso5: new FormGroup({
          name: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
          fecha: new FormControl('', Validators.required),
        }),
        proceso6: new FormGroup({
          name: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
          fecha: new FormControl('', Validators.required),
        }),
        proceso7: new FormGroup({
          name: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
          fecha: new FormControl('', Validators.required),
        }),
        proceso8: new FormGroup({
          name: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
          fecha: new FormControl('', Validators.required),
        }),
        proceso9: new FormGroup({
          name: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
          fecha: new FormControl('', Validators.required),
        }),
        proceso10: new FormGroup({
          name: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
          fecha: new FormControl('', Validators.required),
        }),
        proceso11: new FormGroup({
          name: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
          fecha: new FormControl('', Validators.required),
        }),
        proceso12: new FormGroup({
          name: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
          fecha: new FormControl('', Validators.required),
        }),
      }),
      comportamiento: new FormGroup({
        comportamiento1: new FormGroup({
          name: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
          name2: new FormControl('', Validators.required),
          value2: new FormControl('', Validators.required),
        }),
        comportamiento2: new FormGroup({
          name: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
          name2: new FormControl('', Validators.required),
          value2: new FormControl('', Validators.required),
        }),
        comportamiento3: new FormGroup({
          name: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
          name2: new FormControl('', Validators.required),
          value2: new FormControl('', Validators.required),
        }),
      }),
    });

    this.cambiosForm = new FormGroup({
      fecha: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
    });

    this.controlForm = new FormGroup({
      elaboro: new FormControl('', Validators.required),
      reviso: new FormControl('', Validators.required),
      aprobo: new FormControl('', Validators.required),
    });

    this.generalesForm = new FormGroup({
      nombre_puesto: new FormControl('', Validators.required),
      nivel_puesto: new FormGroup({
        nivel: new FormControl('', Validators.required),
        area: new FormControl('', Validators.required),
      }),
      puesto_jefe: new FormControl('', Validators.required),
      puesto_supervisa1: new FormGroup({
        puesto1: new FormControl('', Validators.required),
        puesto2: new FormControl('', Validators.required),
      }),
      puesto_supervisa2: new FormGroup({
        puesto1: new FormControl('', Validators.required),
        puesto2: new FormControl('', Validators.required),
      }),
    });

    this.perfilForm = new FormGroup({
      academico: new FormControl('', Validators.required),
      idiomas: new FormControl('', Validators.required),
      experiencia: new FormControl('', Validators.required),
      licencia: new FormControl('', Validators.required),
    });

    this.form = new FormGroup({
      generales: this.generalesForm,
      perfil: this.perfilForm,
      competencias: this.competenciasForm,
      control: this.controlForm,
      cambios: this.cambiosForm,
    });
  }

  onReset() {
    this.form.reset();
  }

  onSubmit() {
    const data = this.form.value;
    this.firebaseService
      .addData(data, 'doh')
      .then(() => {
        this.exito.set(true);
        setTimeout(() => {
          this.exito.set(false);
        }, 3000);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        this.onReset();
      });
  }


  ngOnInit(): void {
    initFlowbite();
  }
}
