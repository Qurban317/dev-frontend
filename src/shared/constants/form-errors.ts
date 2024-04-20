import { InjectionToken } from '@angular/core';

interface ILength {
  requiredLength: number;
  actualLength: number;
}
interface IMaxMin {
  max: number;
  min: number;
  actual: number;
}
export const defaultErrors = {
  required: (error: any) => `Required`,
  minlength: ({ requiredLength, actualLength }: ILength) =>
    `Minimum length is ${requiredLength}`,
  maxlength: ({ requiredLength, actualLength }: ILength) =>
    `Maximum length is ${requiredLength}`,
  pattern: (error: any) => 'Please provide a valid format',
  pin_format: (error: any) => 'Set a 4-digit PIN using numbers 0-9',
  max: ({ max, actual }: IMaxMin) => `Maximum value is ${max}`,
  min: ({ min, actual }: IMaxMin) => `Minimum value is ${min}`,
  notEqual: (error: any) => `Password does not match`,
  notEqualPin: (error: any) => `Confirm pin does not match`,
  notValid: (error: any) => '',
};

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors,
});
