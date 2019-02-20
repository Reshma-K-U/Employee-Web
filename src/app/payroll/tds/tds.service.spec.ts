import { TestBed } from '@angular/core/testing';

import { TdsService } from './tds.service';

describe('TdsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TdsService = TestBed.get(TdsService);
    expect(service).toBeTruthy();
  });
});
