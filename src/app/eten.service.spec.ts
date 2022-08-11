import { TestBed } from '@angular/core/testing';

import { EtenService } from './eten.service';

describe('EtenService', () => {
  let service: EtenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
