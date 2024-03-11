import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordMatcher]',
  standalone: true,
  providers:[{provide: NG_VALIDATORS, multi: true, useExisting: PasswordMatcherDirective}]
  /**
   * Providers are objects that can create or deliver dependencies, typically services, to classes that require them.
   * 
   * { provide: NG_VALIDATORS, useExisting: PasswordMatchDirective, multi: true } is used in Angular 
   * to provide your custom validator directive (PasswordMatchDirective) to the Angular forms module. 
   * 
   * { provide: NG_VALIDATORS, ... }: This specifies that you're providing a validator to the Angular forms module. 
   * NG_VALIDATORS is an injection token provided by Angular for this purpose.
   * 
   * useExisting: PasswordMatcherDirective: This tells Angular to use the existing instance of your 
   * PasswordMatcherDirective class as the validator.
   * 
   * multi: true: This specifies that your PasswordMatchDirective is not the only validator 
   * provided for the NG_VALIDATORS token. It allows you to provide multiple validators for the same and 
   * Angular will combine them.
   */
})
export class PasswordMatcherDirective implements Validator {

  @Input('appPasswordMatcher') targetControlName: string = ''

  validate(control: AbstractControl<any, any>): ValidationErrors | null {

    if (!control.parent) { return null }

    const targetControl = control.parent.get(this.targetControlName)

    if (!targetControl) { return null }

    if (control.value !== targetControl?.value) {
      return { passwordMismatch: true }
    }
    return null

  }
  registerOnValidatorChange?(fn: () => void): void {

  }

}
