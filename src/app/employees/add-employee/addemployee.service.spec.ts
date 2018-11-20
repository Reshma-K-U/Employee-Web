import { TestBed, inject } from '@angular/core/testing';

import { AddemployeeService } from './addemployee.service';

describe('AddemployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddemployeeService]
    });
  });

  it('should be created', inject([AddemployeeService], (service: AddemployeeService) => {
    expect(service).toBeTruthy();
  }));
});
