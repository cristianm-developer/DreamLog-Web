import { TestBed } from '@angular/core/testing';

import { DreamsDataService } from './dreams-data.service';

describe('DreamsDataService', () => {
  let service: DreamsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DreamsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
