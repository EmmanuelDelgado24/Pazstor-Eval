import { TestBed } from '@angular/core/testing';

import { TablaGrafico4Service } from './tabla-grafico4.service';

describe('TablaGrafico4Service', () => {
  let service: TablaGrafico4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaGrafico4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
