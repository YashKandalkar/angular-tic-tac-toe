import { TestBed } from '@angular/core/testing';

import { DadjokeService } from './dadjoke.service';

describe('DadjokeService', () => {
  let service: DadjokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadjokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
