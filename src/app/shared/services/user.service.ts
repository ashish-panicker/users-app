import { Injectable } from '@angular/core';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = []

  create(user: User) {
    this.users.push(user)
  }

  findAll() {
    return this.users
  }

}
/**
 * DI also known as Inversion Of Control
 */