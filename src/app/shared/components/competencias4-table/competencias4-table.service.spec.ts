import { TestBed } from '@angular/core/testing';

import { Competencias4TableService } from './competencias4-table.service';

describe('Competencias4TableService', () => {
  let service: Competencias4TableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Competencias4TableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
