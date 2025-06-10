import { TestBed } from '@angular/core/testing';

import { PdfReporteService } from './pdf-reporte.service';

describe('PdfReporteService', () => {
  let service: PdfReporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfReporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
