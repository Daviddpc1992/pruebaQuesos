import { TestBed } from '@angular/core/testing';

import { QuesosService } from './quesos.service';

describe('QuesosService', () => {
  let service: QuesosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuesosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
