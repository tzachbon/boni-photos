import { TestBed } from '@angular/core/testing';

import { FullpageService } from './fullpage.service';

describe('FullpageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FullpageService = TestBed.get(FullpageService);
    expect(service).toBeTruthy();
  });
});
