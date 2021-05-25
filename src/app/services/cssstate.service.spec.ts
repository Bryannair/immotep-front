import { TestBed } from '@angular/core/testing';

import { CssstateService } from './cssstate.service';

describe('CssstateService', () => {
  let service: CssstateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CssstateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
