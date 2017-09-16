import { TestBed, inject } from '@angular/core/testing';

import { SupercarsService } from './supercars.service';

describe('SupercarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupercarsService]
    });
  });

  it('should be created', inject([SupercarsService], (service: SupercarsService) => {
    expect(service).toBeTruthy();
  }));
});
