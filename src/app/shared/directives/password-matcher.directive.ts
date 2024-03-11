import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordMatcher]',
  standalone: true,
  providers:[{provide: NG_VALIDATORS, multi: true, useExisting: PasswordMatcherDirective}]
})
export class PasswordMatcherDirective implements Validator {

  @Input('appPasswordMatcher') targetControlName: string = ''

  validate(control: AbstractControl<any, any>): ValidationErrors | null {

    if (!control.parent) { return null }

    const targetControl = control.parent.get(this.targetControlName)

    if (!targetControl) { return null }

    if (control.valid !== targetControl?.value) {
      return { passwordMismatch: true }
    }
    return null

  }
  registerOnValidatorChange?(fn: () => void): void {

  }

}
