import { TestBed } from '@angular/core/testing';

import { SwupService } from './swup.service';

describe('SwupService', () => {
  let service: SwupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
