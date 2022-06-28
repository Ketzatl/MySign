import { TestBed } from '@angular/core/testing';

import { ToastProcessingService } from './toast-processing.service';

describe('ToastProcessingService', () => {
  let service: ToastProcessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastProcessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
