import { TestBed } from '@angular/core/testing';

import { TablaGrafico5Service } from './tabla-grafico5.service';

describe('TablaGrafico5Service', () => {
  let service: TablaGrafico5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaGrafico5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
