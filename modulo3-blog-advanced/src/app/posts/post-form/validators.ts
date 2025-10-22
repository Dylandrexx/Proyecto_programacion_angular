import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function invalidParamValidator(param: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const v = (control.value ?? '') as string;
    return v.includes(param) ? { invalidParam: true, param } : null;
  };
}
