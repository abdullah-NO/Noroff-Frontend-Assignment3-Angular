import { TestBed } from '@angular/core/testing';

import { TrainerSessionStorageService } from './trainer-session-storage.service';

describe('TrainerSessionStorageService', () => {
  let service: TrainerSessionStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainerSessionStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
