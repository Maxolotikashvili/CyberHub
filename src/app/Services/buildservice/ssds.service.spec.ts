import { TestBed } from '@angular/core/testing';

import { SsdsService } from './ssds.service';

describe('SsdsService', () => {
  let service: SsdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
