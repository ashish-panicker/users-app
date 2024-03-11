import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../model/user';
import { PasswordMatcherDirective } from '../../shared/directives/password-matcher.directive';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, ReactiveFormsModule, PasswordMatcherDirective],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {

  userCategories: string[] = ['Select', 'Administrator', 'Manager', 'Assistant', 'Operator', 'Recovery']
  userStatus: string[] = ['Select', 'Yes', 'No']
  submitted: boolean = false
  valid: boolean = false

  userFormGroup: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repeatPassword: new FormControl('', Validators.required),
    category: new FormControl(this.userCategories[0], this.defaultValueSelected),
    status: new FormControl(this.userStatus[0], this.defaultValueSelected),
    description: new FormControl('')
  })

  constructor(private userService: UserService) {

  }
  get f() {
    return this.userFormGroup.controls
  }

  defaultValueSelected(control: AbstractControl): { [key: string]: any } | null {
    return control.value === 'Select' ? { defaultValueSelected: true } : null
  }

  createUser() {
    console.log(this.userFormGroup.value)
    this.userService.create(new User(
      this.userFormGroup.controls['userName'].value,
      this.userFormGroup.controls['password'].value,
      this.userFormGroup.controls['category'].value,
      this.userFormGroup.controls['status'].value,
      this.userFormGroup.controls['description'].value,
    ))
    console.log(this.userService.findAll())

  }


}
