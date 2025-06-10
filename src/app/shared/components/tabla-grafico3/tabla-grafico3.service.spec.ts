import { TestBed } from '@angular/core/testing';

import { TablaGrafico3Service } from './tabla-grafico3.service';

describe('TablaGrafico3Service', () => {
  let service: TablaGrafico3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaGrafico3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
