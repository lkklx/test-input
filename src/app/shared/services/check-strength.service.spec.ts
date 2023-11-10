import { TestBed } from '@angular/core/testing';

import { CheckStrengthService } from './check-strength.service';

describe('CheckStrengthService', () => {
  let service: CheckStrengthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckStrengthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
