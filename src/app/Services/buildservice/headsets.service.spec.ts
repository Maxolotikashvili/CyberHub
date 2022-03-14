import { TestBed } from '@angular/core/testing';

import { HeadsetsService } from './headsets.service';

describe('HeadsetsService', () => {
  let service: HeadsetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadsetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
