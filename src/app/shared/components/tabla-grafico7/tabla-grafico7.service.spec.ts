import { TestBed } from '@angular/core/testing';

import { TablaGrafico7Service } from './tabla-grafico7.service';

describe('TablaGrafico7Service', () => {
  let service: TablaGrafico7Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaGrafico7Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
