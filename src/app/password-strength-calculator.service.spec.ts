/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PasswordStrengthCalculatorService } from './password-strength-calculator.service';

describe('Service: PasswordStrengthCalculator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasswordStrengthCalculatorService]
    });
  });

  it('should ...', inject([PasswordStrengthCalculatorService], (service: PasswordStrengthCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
