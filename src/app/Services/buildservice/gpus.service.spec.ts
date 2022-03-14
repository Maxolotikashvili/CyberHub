import { TestBed } from '@angular/core/testing';

import { GpusService } from './gpus.service';

describe('GpusService', () => {
  let service: GpusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GpusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
