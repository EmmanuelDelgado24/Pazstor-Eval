import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { LayoutComponent } from '../../shared/layouts/layout/layout.component';
import { TableGeneralesComponent } from '../../shared/components/table-generales/table-generales.component';
import { TableMisionComponent } from '../../shared/components/table-mision/table-mision.component';
import { TableResponsabilidadesComponent } from '../../shared/components/table-responsabilidades/table-responsabilidades.component';
import { TablePerfilComponent } from '../../shared/components/table-perfil/table-perfil.component';
import { TableCompetenciasComponent } from '../../shared/components/table-competencias/table-competencias.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { TablaControlDocumentoComponent } from '../../shared/components/tabla-control-documento/tabla-control-documento.component';
import { TablaAutoridadesComponent } from '../../shared/components/tabla-autoridades/tabla-autoridades.component';
import { TablaControlCambiosComponent } from '../../shared/components/tabla-control-cambios/tabla-control-cambios.component';
import { initFlowbite } from 'flowbite';
import { FirebaseService } from '../../core/services/firebase.service';
import { RouterOutlet } from '@angular/router';
import { ToastSuccesfullComponent } from '../../shared/components/ui/toast-succesfull/toast-succesfull.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BotonCompetenciasComponent } from '../../shared/components/boton-actualizar/boton-actualizar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LayoutComponent,
    TableGeneralesComponent,
    TableMisionComponent,
    TableResponsabilidadesComponent,
    TablePerfilComponent,
    TableCompetenciasComponent,
    FooterComponent,
    TablaControlDocumentoComponent,
    TablaAutoridadesComponent,
    TablaControlCambiosComponent,
    RouterOutlet,
    ToastSuccesfullComponent,
    ReactiveFormsModule,
    BotonCompetenciasComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  loading = signal(false);
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
      .addData(data, 'ingenieria')
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