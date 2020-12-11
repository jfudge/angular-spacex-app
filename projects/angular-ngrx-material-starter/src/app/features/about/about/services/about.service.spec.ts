import { TestBed } from '@angular/core/testing';

import { AboutService1 } from './about.service';

describe('AboutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: 1 = TestBed.get(AboutService1);
    expect(service).toBeTruthy();
  });
});
