import { TestBed } from '@angular/core/testing';

import { Competencias2TableService } from './competencias2-table.service';

describe('Competencias2TableService', () => {
  let service: Competencias2TableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Competencias2TableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
