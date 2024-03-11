import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {

  userCategories: string[] = ['Administrator', 'Manager', 'Assistant', 'Operator', 'Recovery']
  userStatus: string[] = ['Yes', 'No']

  userFormGroup: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repeatPassword: new FormControl('', Validators.required),
    category: new FormControl(''),
    status: new FormControl(''),
    description: new FormControl('')
  })

  constructor(private userService: UserService) {

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
