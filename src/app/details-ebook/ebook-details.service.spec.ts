import { TestBed } from '@angular/core/testing';

import { EbookDetailsService } from './ebook-details.service';

describe('EbookDetailsService', () => {
  let service: EbookDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EbookDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
