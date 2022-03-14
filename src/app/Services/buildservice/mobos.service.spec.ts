import { TestBed } from '@angular/core/testing';

import { MobosService } from './mobos.service';

describe('MobosService', () => {
  let service: MobosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
