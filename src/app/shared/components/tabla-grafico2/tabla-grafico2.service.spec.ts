import { TestBed } from '@angular/core/testing';

import { TablaGrafico2Service } from './tabla-grafico2.service';

describe('TablaGrafico2Service', () => {
  let service: TablaGrafico2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaGrafico2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
