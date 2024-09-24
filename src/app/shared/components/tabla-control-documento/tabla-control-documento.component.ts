import { Component, model } from '@angular/core';
import { Puesto } from '../../../utils/data';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-control-documento',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tabla-control-documento.component.html'
})
export class TablaControlDocumentoComponent {
  puesto = Puesto;

  controlForm = model<FormGroup>(new FormGroup({
    elaboro: new FormControl('', Validators.required),
    reviso: new FormControl('', Validators.required),
    aprobo: new FormControl('', Validators.required),
  }));
}
