import { Injectable } from '@angular/core';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private id: number = 3
  private users: User[] = [
    new User(1, 'John Doe', 'password', 'Manager', 'Yes', 'Sales'),
    new User(2, 'Jane Doe', 'password', 'Administrator', 'Yes', 'Engineering'),
  ]
  private userCategories: string[] = ['Select', 'Administrator', 'Manager', 'Assistant', 'Operator', 'Recovery']
  private departments: string[] = ['Select', 'Sales', 'Support', 'Engineering', 'Management']

  getNeUserId(): number {
    return this.id + 1
  }

  getUserCategories(): string[] {
    return this.userCategories
  }

  getDepartments(): string[] {
    return this.departments
  }

  create(user: User) {
    this.users.push(user)
  }

  getAllUsers() {
    return this.users
  }

}
/**
 * DI also known as Inversion Of Control
 */