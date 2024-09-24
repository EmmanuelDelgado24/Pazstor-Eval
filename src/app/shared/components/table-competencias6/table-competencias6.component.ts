import { Component, model} from '@angular/core';
import { Competencias, Comportamientos, Calificaciones } from '../../../utils/data';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-table-competencias6',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './table-competencias6.component.html',
  styles: ``
})
export class TableCompetencias6Component {
  competencias = Competencias;
  comportamiento = Comportamientos;
  calificaciones = Calificaciones;

  competenciasForm = model<FormGroup>(
    new FormGroup({
      proceso: new FormGroup({
        proceso1: new FormGroup({
          name: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
        }),
        proceso2: new FormGroup({
          name: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
        }),
        proceso3: new FormGroup({
          name: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
        }),
        proceso4: new FormGroup({
          name: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
        }),
        proceso5: new FormGroup({
          name: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
        }),
        proceso6: new FormGroup({
          name: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
        }),
        proceso7: new FormGroup({
          name: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
        }),
        proceso8: new FormGroup({
          name: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
        }),
        proceso9: new FormGroup({
          name: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
        }),
        proceso10: new FormGroup({
          name: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
        }),
        proceso11: new FormGroup({
          name: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
        }),
        proceso12: new FormGroup({
          name: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
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
    })
  );
}
