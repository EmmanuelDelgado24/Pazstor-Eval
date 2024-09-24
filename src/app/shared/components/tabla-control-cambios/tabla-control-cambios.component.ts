import { Component, Input, model } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-tabla-control-cambios',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tabla-control-cambios.component.html',
})
export class TablaControlCambiosComponent {
  cambiosForm = model<FormGroup>(
    new FormGroup({
      fecha: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
    })
  );

}
