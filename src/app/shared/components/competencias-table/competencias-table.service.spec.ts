import { TestBed } from '@angular/core/testing';

import { CompetenciasTableService } from './competencias-table.service';

describe('CompetenciasTableService', () => {
  let service: CompetenciasTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetenciasTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
