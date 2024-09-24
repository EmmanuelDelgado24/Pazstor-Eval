import { Component, model } from '@angular/core';
import { Academico, Idiomas, Experiencia, Licencia } from '../../../utils/data';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-perfil',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './table-perfil.component.html',
})
export class TablePerfilComponent {
  academico = Academico;
  idiomas = Idiomas;
  experiencia = Experiencia;
  licencia = Licencia;

  perfilForm = model<FormGroup>(
    new FormGroup({
      academico: new FormControl('', Validators.required),
      idiomas: new FormControl('', Validators.required),
      experiencia: new FormControl('', Validators.required),
      licencia: new FormControl('', Validators.required),
    })
  );
}
