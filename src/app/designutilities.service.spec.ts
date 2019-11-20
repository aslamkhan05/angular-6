import { TestBed } from '@angular/core/testing';

import { DesignutilitiesService } from './designutilities.service';

describe('DesignutilitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DesignutilitiesService = TestBed.get(DesignutilitiesService);
    expect(service).toBeTruthy();
  });
});
