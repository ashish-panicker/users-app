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

  getNewUserId(): number {
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

  getUserByUserId(id: number): User | undefined {
    return this.users.filter(user => user.id === +id).pop()
  }

  deleteUserById(id: number): void {
    const index = this.users.findIndex(user => user.id === +id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}