import { TestBed } from '@angular/core/testing';

import { RamsService } from './rams.service';

describe('RamsService', () => {
  let service: RamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
