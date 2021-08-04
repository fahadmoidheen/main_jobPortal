import { TestBed } from '@angular/core/testing';

import { EmployerdataServiceService } from './employerdata-service.service';

describe('EmployerdataServiceService', () => {
  let service: EmployerdataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployerdataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
