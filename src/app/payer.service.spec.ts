/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PayerService } from './Services/payer.service';

describe('PayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PayerService]
    });
  });

  it('should ...', inject([PayerService], (service: PayerService) => {
    expect(service).toBeTruthy();
  }));
});
