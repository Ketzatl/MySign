import { TestBed } from '@angular/core/testing';

import { ConnectionProcessingService } from './connection-processing.service';

describe('ConnectionProcessingService', () => {
  let service: ConnectionProcessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectionProcessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
