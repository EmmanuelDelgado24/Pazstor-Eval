import { TestBed } from '@angular/core/testing';

import { Competencias6TableService } from './competencias6-table.service';

describe('Competencias6TableService', () => {
  let service: Competencias6TableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Competencias6TableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
