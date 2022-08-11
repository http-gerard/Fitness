import { TestBed } from '@angular/core/testing';

import { IonicAuthService } from './ionic-auth.service';

describe('FireserviceService', () => {
  let service: IonicAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonicAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
