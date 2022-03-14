import { TestBed } from '@angular/core/testing';

import { HddsService } from './hdds.service';

describe('HddsService', () => {
  let service: HddsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HddsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
