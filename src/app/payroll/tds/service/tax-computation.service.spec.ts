import { TestBed, inject } from '@angular/core/testing';

import { TaxComputationService } from './tax-computation.service';

describe('TaxComputationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaxComputationService]
    });
  });

  it('should be created', inject([TaxComputationService], (service: TaxComputationService) => {
    expect(service).toBeTruthy();
  }));
});
