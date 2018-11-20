import { TestBed, inject } from '@angular/core/testing';

import { FirestoreLeaveService } from './firestore-leave.service';

describe('FirestoreLeaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirestoreLeaveService]
    });
  });

  it('should be created', inject([FirestoreLeaveService], (service: FirestoreLeaveService) => {
    expect(service).toBeTruthy();
  }));
});
