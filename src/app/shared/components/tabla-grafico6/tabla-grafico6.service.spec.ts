import { TestBed } from '@angular/core/testing';

import { TablaGrafico6Service } from './tabla-grafico6.service';

describe('TablaGrafico6Service', () => {
  let service: TablaGrafico6Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaGrafico6Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
