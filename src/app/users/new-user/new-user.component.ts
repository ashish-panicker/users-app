import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../model/user';
import { PasswordMatcherDirective } from '../../shared/directives/password-matcher.directive';
import { UserHttpService } from '../../shared/services/user-http.service';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, ReactiveFormsModule, PasswordMatcherDirective],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {

  userCategories: string[] = []
  userStatus: string[] = ['Select', 'Yes', 'No']
  departments: string[] = []

  userFormGroup: FormGroup

  /**
   * userFormGroup: FormGroup = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      repeatPassword: new FormControl('', Validators.required),
      category: new FormControl(this.userCategories[0], this.defaultValueSelected),
      status: new FormControl(this.userStatus[0], this.defaultValueSelected),
      description: new FormControl('')
    })
   * @param fb            FormBuilder from angular/forms
   * @param userService   UserService, custom service
   */

  constructor(private fb: FormBuilder, private userService: UserHttpService) {

    this.userFormGroup = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
      category: [this.userCategories[0], this.defaultValueSelected],
      status: [this.userStatus[0], this.defaultValueSelected],
      department: [this.departments[0], this.defaultValueSelected],
    })

    userService.getDepartments().subscribe({
      next: response => { response.forEach(dep => this.departments.push(dep.department)) }
    })
    userService.getCategories().subscribe({
      next: response => { response.forEach(ct => this.userCategories.push(ct.category)) }
    })
  }

  get f() {
    return this.userFormGroup.controls
  }

  defaultValueSelected(control: AbstractControl): { [key: string]: boolean } | null {
    return control.value === 'Select' ? { defaultValueSelected: true } : null
    /**
     * if(contro.value === 'Select'){
     *  return { defaultValueSelected: true }
     * } else {
     *  return null
     * }
     */
  }

  createUser() {
    const user = new User(
      this.f['userName'].value,
      this.f['password'].value,
      this.f['category'].value,
      this.f['status'].value,
      this.f['department'].value,
    )
    this.userService.createUser(user).subscribe({
      next: user => console.log(user.id),
      error: err => console.error(err),
      complete: console.log
    })
    this.resetForm()
  }

  resetForm() {
    this.userFormGroup.reset()

  }


}
