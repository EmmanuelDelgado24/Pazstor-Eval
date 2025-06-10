import { TestBed } from '@angular/core/testing';

import { Competencias3TableService } from './competencias3-table.service';

describe('Competencias3TableService', () => {
  let service: Competencias3TableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Competencias3TableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
