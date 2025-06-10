import { TestBed } from '@angular/core/testing';

import { Competencias7TableService } from './competencias7-table.service';

describe('Competencias7TableService', () => {
  let service: Competencias7TableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Competencias7TableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
