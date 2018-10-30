import { TestBed } from '@angular/core/testing';

import { SwapihitService } from './swapihit.service';

describe('SwapihitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwapihitService = TestBed.get(SwapihitService);
    expect(service).toBeTruthy();
  });
});
