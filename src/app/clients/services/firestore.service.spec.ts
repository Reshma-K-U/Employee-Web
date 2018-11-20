import { TestBed, inject } from '@angular/core/testing';

import { FirestoreClientService } from './firestore.service';

describe('FirestoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirestoreClientService]
    });
  });

  it('should be created', inject([FirestoreClientService], (service: FirestoreClientService) => {
    expect(service).toBeTruthy();
  }));
});
