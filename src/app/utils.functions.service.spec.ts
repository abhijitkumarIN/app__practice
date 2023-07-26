import { TestBed } from '@angular/core/testing';

import { UtilsFucntionsService } from './utils.functions.service';

describe('UtilsFucntionsService', () => {
  let service: UtilsFucntionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsFucntionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
