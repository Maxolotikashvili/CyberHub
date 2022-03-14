import { TestBed } from '@angular/core/testing';

import { CpuCoolersService } from './cpu-coolers.service';

describe('CpuCoolersService', () => {
  let service: CpuCoolersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpuCoolersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
