import { TestBed } from '@angular/core/testing';

import { KlientapiService } from './klientapi.service';

describe('KlientapiService', () => {
  let service: KlientapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KlientapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
