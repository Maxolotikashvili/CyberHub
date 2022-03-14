import { TestBed } from '@angular/core/testing';

import { KeyboardsService } from './keyboards.service';

describe('KeyboardsService', () => {
  let service: KeyboardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyboardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
