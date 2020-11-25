/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StrengthDogService } from './strength-dog.service';

describe('Service: StrengthDog', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StrengthDogService]
    });
  });

  it('should ...', inject([StrengthDogService], (service: StrengthDogService) => {
    expect(service).toBeTruthy();
  }));
});
