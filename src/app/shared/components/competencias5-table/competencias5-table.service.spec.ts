import { TestBed } from '@angular/core/testing';

import { Competencias5TableService } from './competencias5-table.service';

describe('Competencias5TableService', () => {
  let service: Competencias5TableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Competencias5TableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
