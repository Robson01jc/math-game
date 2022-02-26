import { AbstractControl } from '@angular/forms';

export class MathValidators {
  static addition(target: string, sourceOne: string, sourceTwo: string) {
    return (form: AbstractControl) => {
      const {
        [target]: sum,
        [sourceOne]: firstNumber,
        [sourceTwo]: secondNumber,
      } = form.value;
      if (firstNumber + secondNumber === parseInt(sum)) {
        return null;
      }

      return { addition: true };
    };
  }
}
