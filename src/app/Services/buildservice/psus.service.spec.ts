import { TestBed } from '@angular/core/testing';

import { PsusService } from './psus.service';

describe('PsusService', () => {
  let service: PsusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PsusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
